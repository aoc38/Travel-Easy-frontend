import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./adduser.css";

export default function AddUser() {

  let navigate = useNavigate();
  // const [cards,setCards] = useState([]);
  // const {SetloggedInUser} = useContext(UserContext);
  const [user, setUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    mailingAddress: "",
    card: {
      cardType: 'VISA'
    }
    // cards:[]
    // cardNumber: null,
    // expiryDate: null,
    // cvv: null,
    // cardOwnerName: null
  });


  const { firstName, middleName, lastName, email, username, password, mailingAddress } = user;
  const { cardNumber, cardOwnerName, cvv, expiryDate, cardType } = user.card;

  //const { firstName, middleName, lastName, email, username, password, mailingAddress } = user;
  // const {cardNumber,cardOwnerName,cvv,expiryDate}= cards;


  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // setUser({...user.cards,cards});
  };

  //[{}]
  const onCardInputChange = (e) => {
    setUser({ ...user, ...{ card: { ...user.card, [e.target.name]: e.target.value } } });
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:8080/usersignup", user);
      console.log(response.data);
      console.warn(response.data);
      //localStorage.setItem("user-info", JSON.stringify(response.data));
      // SetloggedInUser(JSON.stringify(response.data));
      sessionStorage.setItem("user-info", JSON.stringify(response.data));
      navigate('/searchFlight');
    } catch (error) {
      console.log(`ERROR: ${error}`);
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

  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'> Register User </h2>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary">
              <Link to={"/loginuser"}>Sign In </Link>
            </span>

          </div>
          <div className='add-space'></div>
          <div className='add-space'></div>
          <div className='add-space'></div>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <div className="row">
                <div class="col s12 m6 ">
                  <label htmlFor='firstname' className='form-label required-field'> First Name </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter your First Name'
                    name='firstName'
                    required
                    value={firstName}
                    onChange={(e) => onInputChange(e)}
                  // onChange = {(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div class="col s12 m6">
                  <label htmlFor='middleName' className='form-label '> Middle Name </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter your Middle Name'
                    name='middleName'
                    value={middleName}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className='add-space'></div>
              <div className="row">
                <div class="col s12 m6">

                  <label htmlFor='lastName' className='form-label required-field'> Last Name </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter your Last Name'
                    name='lastName'
                    required
                    value={lastName}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div class="col s12 m6">
                  <label htmlFor='email' className='form-label required-field'> Email </label>
                  <input
                    type={"email"}
                    className="form-control"
                    placeholder='Enter your email '
                    name='email'
                    required
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className='add-space'></div>
              <div className="row">
                <div class="col s12 m6">
                  <label htmlFor='username' className='form-label required-field'> Username </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter your username'
                    name='username'
                    required
                    value={username}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div class="col s12 m6">
                  <label htmlFor='password' className='form-label required-field'> Password </label>
                  <input
                    type={"password"}
                    className="form-control"
                    placeholder='Enter your password'
                    name='password'
                    required
                    value={password}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className='add-space'></div>
              <label htmlFor='cardOwnerName' className='form-label required-field'>Name on Card </label>
              <input
                type={"text"}
                className="form-control"
                placeholder='Enter name on the credit card'
                name='cardOwnerName'
                required
                value={cardOwnerName}
                onChange={(e) => onCardInputChange(e)}
              />

              <div className='add-space'></div>
              <div className="row">
                <div class="col s12 m6">

                  <label htmlFor='cardNumber' className='form-label required-field'>Card Number </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter credit card number'
                    name='cardNumber'
                    required
                    value={cardNumber}
                    onChange={(e) => onCardInputChange(e)}
                  />
                </div>
                <div class="col s12 m6">

                  <label htmlFor='cardType' className='form-label required-field'>Card Type</label>
                  <select value={cardType}
                    className="form-control"
                    name='cardType'
                    required
                    onChange={(e) => onCardInputChange(e)}
                  >
                    <option value="VISA">VISA</option>
                    <option value="MASTERCARD">MASTER CARD</option>
                  </select>
                </div>
              </div>

              <div className='add-space'></div>
              <div className="row">

                <div class="col s12 m6">
                  <label htmlFor='expiryDate' className='form-label required-field'>Expiry Date </label>
                  <input
                    type={"month"}
                    className="form-control"
                    placeholder='Enter credit card expiry in mm/yy format'
                    name='expiryDate'
                    required
                    value={expiryDate}
                    onChange={(e) => onCardInputChange(e)}
                  />

                </div>
                <div class="col s12 m6">
                  <label htmlFor='cvv' className='form-label required-field'>CVV </label>
                  <input
                    type={"number"}
                    minLength={3}
                    maxLength='3'
                    className="form-control"
                    required
                    placeholder='Enter cvv'
                    name='cvv'
                    value={cvv}
                    onChange={(e) => onCardInputChange(e)}
                  />

                </div>
              </div>
              <div className='add-space'></div>
              <label htmlFor='mailingAddress' className='form-label required-field'>Mailing Address </label>
              <input
                type={"text"}
                className="form-control"
                placeholder='Enter your mailing address'
                name='mailingAddress'
                value={mailingAddress}
                onChange={(e) => onInputChange(e)}
              />


            </div>
            <div className='text-center'>
              <button type='submit' className='btn btn-outline-primary'>Submit</button>
              <Link type='cancel' className='btn btn-outline-danger mx-2' to={"/searchFlight"}>Cancel</Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
