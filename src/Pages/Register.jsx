import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


function Register() {
    const [FormData, setForm] = React.useState({
        Name: '',
        Email: '',
        Password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...FormData, [name]: value });
    };


    const SubmitForm = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('https://localhost:7240/api/User/Register', FormData);
            console.log(res.data);
            if (res.status === 200) {
                toast.success('User Registered Successfully');
            }
            setForm({
                Name: '',
                Email: '',
                Password: '',
            })
        }

        catch (error) {


            if (error.response && error.response.data) {
                let errorMessage = '';
                if (!FormData.Name || !FormData.Email || !FormData.Password) {
                    errorMessage = 'Please enter all details.';
                } else {
                    // If specific field errors exist (Email or Password), show them
                    if (error.response.data.errors?.Name) {
                        errorMessage = error.response.data.errors.Name[0];
                    }

                    if (error.response.data.errors?.Email) {
                        errorMessage = error.response.data.errors.Email[0];
                    }
                    if (error.response.data.errors?.Password) {
                        errorMessage = error.response.data.errors.Password[0];
                    }
                }
                    // Show the final error message
                    toast.error(errorMessage);
            }



            console.log(error);
        }

    }
    return (
        <div className="container mt-5 " style={{ border: '1px solid lightgrey', width: '400px', padding: '20px', borderRadius: '8px' }}>
            <h2 className="mb-3 text-center">Register</h2>
            <form onSubmit={SubmitForm}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Username"
                        id="Nameinput"
                        name="Name"
                        value={FormData.Name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                        id="Emailinput"
                        name="Email"
                        value={FormData.Email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        id="Passwordinput"
                        name="Password"
                        value={FormData.Password}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-md btn-primary">
                        Submit
                    </button>
                </div>
            </form>
            <div className='hr-text text-center '>
                <hr />
                <span className='bg-white px-2 position-relative' style={{ top: '-18px' }}>or</span>
            </div>
            <div className="row gap-2">
                <div className="col">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-100 d-flex align-items-center justify-content-center"
                        style={{
                            backgroundColor: '#f8f9fa',
                            color: '#000',
                            border: '1px solid #ced4da',
                            height: '45px',
                            textDecoration: 'none'
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke="currentColor"
                            fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            viewBox="0 0 24 24" className="me-2">
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2 
        2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2 4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 
        -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 
        -.1 3.2 4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6 -.6 .6 -.6 1.2 -.5 2v3.5"/>
                        </svg>
                        Sign up with GitHub
                    </a>
                </div>

                <div className="col">
                    <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-100 d-flex align-items-center justify-content-center"
                        style={{
                            backgroundColor: '#f8f9fa',
                            color: '#000',
                            border: '1px solid #ced4da',
                            height: '45px',
                            textDecoration: 'none'
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke="currentColor"
                            fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            viewBox="0 0 24 24" className="me-2">
                            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                        </svg>
                        Sign up with X
                    </a>
                </div>
                <Link className='text-center mt-2' style={{ textDecoration: 'none' }} to="/Login">Already a user</Link>

            </div>

        </div>

    )
}

export default Register