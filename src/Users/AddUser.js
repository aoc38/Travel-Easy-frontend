import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
  
  let navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: String,
    middlename: null,
    lastname: null,
    email: null,
    username: "",
    password: '',
    maddress: '',
    ccnumber: Number,
    ccexpiry: "",
    cvv: null,
    ccname: ''
  })

  const { firstname, middlename, lastname, email, username, password, maddress, ccnumber, ccexpiry, cvv, ccname } = user;

  const onInputChange= (e) =>{
    setUser({...user,[e.target.name]:e.target.value})
  };

  const onSubmit= async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user",user)
    navigate('/');
  };
  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'> Register User </h2>
          <form  onSubmit={(e) => onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='firstname' className='form-label'> First Name </label>
            <input
              type={"text"}
              className="form-control"
              placeholder='Enter your First Name'
              name='firstname'
              value={firstname}
              onChange={(e) => onInputChange(e)} 
              />
            <label htmlFor='middlename' className='form-label'> Middle Name </label>
            <input
              type={"text"}
              className="form-control"
              placeholder='Enter your Middle Name'
              name='middlename'
              value={middlename} 
              onChange={(e) => onInputChange(e)} 
              />
            <label htmlFor='lastname' className='form-label'> Last Name </label>
            <input
              type={"text"}
              className="form-control"
              placeholder='Enter your Last Name'
              name='lastname'
              value={lastname}
              onChange={(e) => onInputChange(e)} 
              />
            <label htmlFor='email' className='form-label'> Email </label>
            <input
              type={"email"}
              className="form-control"
              placeholder='Enter your email '
              name='email'
              value={email}
              onChange={(e) => onInputChange(e)} 
              />
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
            <label htmlFor='maddress' className='form-label'>Mailing Address </label>
            <input
              type={"text"}
              className="form-control"
              placeholder='Enter your mailing address'
              name='maddress'
              value={maddress} 
              onChange={(e) => onInputChange(e)} 
              />
            <label htmlFor='ccnumber' className='form-label'>Credit Card Number </label>
            <input
              type={"number"}
              className="form-control"
              placeholder='Enter credit card number'
              name='ccnumber'
              minLength={16}
              maxLength='16'
              value={ccnumber} 
              onChange={(e) => onInputChange(e)} 
              />
            <label htmlFor='ccexpiry' className='form-label'>Credit Card Expiry </label>
            <input
              type={"month"}
              className="form-control"
              placeholder='Enter credit card expiry in mm/yy format'
              name='ccexpiry'
              value={ccexpiry}
              onChange={(e) => onInputChange(e)} 
              />
            <label htmlFor='cvv' className='form-label'>Credit Card CVV </label>
            <input
              type={"number"}
              minLength={3}
              maxLength='3'
              className="form-control"
              placeholder='Enter cvv'
              name='cvv'
              value={cvv} 
              onChange={(e) => onInputChange(e)} 
              />
            <label htmlFor='ccname' className='form-label'>Name on Credit Card </label>
            <input
              type={"text"}
              className="form-control"
              placeholder='Enter name on the credit card'
              name='ccname'
              value={ccname}
              onChange={(e) => onInputChange(e)} 
              />
          </div>
          <button type='submit' className='btn btn-outline-primary'>Submit</button>
          <Link type='cancel' className='btn btn-outline-danger mx-2' to={"/"}>Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
