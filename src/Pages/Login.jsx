import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const FormData = {
        email,
        password
    };
    const navigate = useNavigate();

    const handleclick = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('https://localhost:7240/api/User/Login', FormData);
            console.log(res.data);
            if (res.status === 200) {
                toast.success('Login successful!');
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userId', res.data.userId);
                localStorage.setItem('name', res.data.name);

                setEmail('');
                setPassword('');
                navigate('/Dashboard');
            }
        } catch (error) {
            // Handle errors for Email and Password fields, and a generic message
            // Check if error response data exists
            if (error.response && error.response.data) {
                let errorMessage = '';

                // If both email and password are missing, show a single message
                if (!FormData.email || !FormData.password) {
                    errorMessage = 'Please enter both your email and password.';
                } else {
                    // If specific field errors exist (Email or Password), show them
                    if (error.response.data.errors?.Email) {
                        errorMessage = error.response.data.errors.Email[0];
                    }
                    if (error.response.data.errors?.Password) {
                        errorMessage = error.response.data.errors.Password[0];
                    }

                    // Handle specific 'Invalid password' message
                    if (error.response.data.message?.includes('Invalid password')) {
                        errorMessage = 'The password you entered is invalid. Please try again.';
                    }
                }

                // Show the final error message
                toast.error(errorMessage);
            }
            console.log(error);

        }
    }



    return (
        <div className='container mt-5' style={{ border: '1px solid lightgrey', width: '400px', padding: '20px' }}>
            <h2 className='text-center'>Sign In</h2>

            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <div className='text-center'>
                    <button onClick={handleclick} type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>

            </form>


        </div>
    )
}

export default Login