import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function LoginPage() {
  let navigate = useNavigate();
  const {SetloggedInUser} = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const { username, password } = loginData;
  const onInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    // setUser({...user.cards,cards});
  };



  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:8080/userlogin", loginData);
      console.log(response.data);
     // localStorage.setItem("user-info", JSON.stringify(response.data));
     SetloggedInUser(JSON.stringify(response.data));
      
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
    navigate('/searchFlight');
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'> Login </h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='username' className='form-label'> Username </label>
              <input
                type={"text"}
                className="form-control"
                placeholder='Enter your username'
                name='username'
                value={username}
                onChange={(e) => onInputChange(e)}
              />
              <label htmlFor='password' className='form-label'> Password </label>
              <input
                type={"password"}
                className="form-control"
                placeholder='Enter your password'
                name='password'
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link type='cancel' className='btn btn-outline-danger mx-2' to={"/"}>Cancel</Link>

            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary">
                <Link to={"/register"}>Sign Up </Link>
              </span>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
