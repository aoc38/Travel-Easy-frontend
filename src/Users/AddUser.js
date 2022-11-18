import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
  
  let navigate = useNavigate();
 // const [cards,setCards] = useState([]);

  const [user, setUser] = useState({
    firstName: null,
    middleName:null ,
    lastName: null,
    email: null,
    username: null,
    password: null,
    mailingAddress: null,
    card:{}
    // cards:[]
    // cardNumber: null,
    // expiryDate: null,
    // cvv: null,
    // cardOwnerName: null
  });


  const { firstName,middleName, lastName, email, username, password, mailingAddress } = user;
  const {cardNumber,cardOwnerName,cvv,expiryDate,cardType } = user.card;
  
  //const { firstName, middleName, lastName, email, username, password, mailingAddress } = user;
  // const {cardNumber,cardOwnerName,cvv,expiryDate}= cards;


  const onInputChange= (e) =>{
    setUser({...user,[e.target.name]:e.target.value});
    // setUser({...user.cards,cards});
  };

  //[{}]
  const onCardInputChange= (e) =>{
    setUser({...user,...{card:{...user.card,[e.target.name]:e.target.value}}});
  };
  

  const onSubmit= async(e)=>{
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:8080/user",user);
      console.log(response.data);
    } catch (error) {
      console.log( `ERROR: ${error}`);
    }

    // try {
    //   let res = await fetch("http://localhost:8080/user", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       firstName:firstName,
    //       cards:cards
    //     }),
    //     config: {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     },
    //   });
    //   let resJson = await res.json();
    //   if (res.status === 200) {
    //     console.log("Success");
    //   } else {
    //     console.log("Error");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
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
              name='firstName'
              value={firstName}
              onChange={(e) => onInputChange(e)} 
            // onChange = {(e) => setFirstName(e.target.value)}
              />
            <label htmlFor='middleName' className='form-label'> Middle Name </label>
            <input
              type={"text"}
              className="form-control"
              placeholder='Enter your Middle Name'
              name='middleName'
              value={middleName} 
              onChange={(e) => onInputChange(e)} 
              />
            <label htmlFor='lastName' className='form-label'> Last Name </label>
            <input
              type={"text"}
              className="form-control"
              placeholder='Enter your Last Name'
              name='lastName'
              value={lastName}
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
            <label htmlFor='mailingAddress' className='form-label'>Mailing Address </label>
            <input
              type={"text"}
              className="form-control"
              placeholder='Enter your mailing address'
              name='mailingAddress'
              value={mailingAddress} 
              onChange={(e) => onInputChange(e)} 
              />
              <label htmlFor='cardType' className='form-label'>Card Type</label>
              <select value={cardType} 
              className="form-control"
              name='cardType'
              onChange={(e) => onCardInputChange(e)} 
              >
                <option value="VISA">VISA</option>
                <option value="MASTER CARD">MASTER CARD</option>
              </select>

            <label htmlFor='cardNumber' className='form-label'>Credit Card Number </label>
            <input
              type={"number"}
              className="form-control"
              placeholder='Enter credit card number'
              name='cardNumber'
              minLength={16}
              maxLength='16'
              value={cardNumber} 
              onChange={(e) => onCardInputChange(e)} 
              />
            <label htmlFor='expiryDate' className='form-label'>Credit Card Expiry </label>
            <input
              type={"month"}
              className="form-control"
              placeholder='Enter credit card expiry in mm/yy format'
              name='expiryDate'
              value={expiryDate}
              onChange={(e) => onCardInputChange(e)} 
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
              onChange={(e) => onCardInputChange(e)} 
              />
            <label htmlFor='cardOwnerName' className='form-label'>Name on Credit Card </label>
            <input
              type={"text"}
              className="form-control"
              placeholder='Enter name on the credit card'
              name='cardOwnerName'
              value={cardOwnerName}
              onChange={(e) => onCardInputChange(e)} 
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
