import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function Login() {
const [email, setEmail]=useState('');
const[password, setPassword]=useState('');

const FormData={
  email,
  password
};
const navigate = useNavigate();

const handleclick = async(e)=>{
    e.preventDefault();

    try {
        const res = await axios.post('https://localhost:7240/api/User/Login', FormData);
        console.log(res.data);
        if(res.status === 200)
        {
            toast.success('Login successful!');

            setEmail('');
            setPassword('');
            navigate('/Dashboard');
        }
    } catch (error) {
        if ([400, 401, 403, 404, 500].includes(error.response.status)) {
        
            toast.error(error.response.data.message );
            // toast.error( error.response.data.errors.Email[0]);
            // toast.error( error.response.data.errors.Password[0]);
          }
          console.log(error);
        
        }
}



  return (
    <div className='container mt-5' style={{border:'1px solid lightgrey', width:'400px', padding: '20px'}}>
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

        <button onClick={handleclick} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>


    </div>
  )
}

export default Login