import React from 'react';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { FormControl } from '@mui/material';
import BasicTextFields from '../Common/textfield';
import SelectDropdown from '../Common/dropdown';
import DatePickerTravel from '../Common/date-picker';
import { Link } from 'react-router-dom';
import "./flight-form.css";
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
function Bookform(props) {

  //get logged in user info 
  let loggedinUser = JSON.parse(localStorage.getItem("user-info"));
  console.log("logged data in BookForm : ", loggedinUser);
  const userData = (loggedinUser);

  const [card, setCard] = useState({});
  const { cardNumber, cardOwnerName, cvv, expiryDate, cardType } = card;
  const [personList, setPersonList] = useState(
    [
      {
        firstName: "",
        lastName: ""
      }
    ]
  );
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...personList];
    list[index][name] = value;
    setPersonList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...personList];
    list.splice(index, 1);
    setPersonList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setPersonList([...personList, { firstName: "", lastName: "" }]);
  };



  // const [cardType, setCardType] = useState([
  //   {
  //     label: "Amex",
  //     id: "lth",
  //   },
  //   {
  //     label: "Visa",
  //     id: "htl",
  //   },
  //   {
  //     label: "Discover",
  //     id: "htl",
  //   }
  // ]);

  useEffect(() => {
    loadUser();
  }, [card]);

  const loadUser = async () => {
    //const result = await axios.get(`http://localhost:8080/user/${id}`);
    // console.log("logged in user card info : ",userData.cards.filter((obj) => obj.default === true));
    setCard(userData.cards.filter((obj) => obj.default === true)[0]);
  }

  const onCardInputChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };
  const showSuccessPopup = () => {
    ///add data to database
    handleBooking();
    alert("Payment Successful");
  }
  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      //call flight booking api and send flight object data along with user data
      let response = await axios.post("http://localhost:8080/bookflight", userData);
      // let response = await axios.post("http://localhost:8080/usersignup", userData  );
      // console.log(response.data);
      // console.warn(response.data);
      // localStorage.setItem("user-info", JSON.stringify(response.data));
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  };
  return (
    <div className='container' style={{ textAlign: "center" }}>
      <div className='col-md-6'>
        <Card style={{ margin: 10 }}>
          <CardContent>
            <FormControl>
              {personList.map((person, index) => {
                return (
                  <div key={index}>
                    <div className="mt-2" >
                      <BasicTextFields
                        label="FirstName"
                        id="outlined-basic"
                        name="firstName"
                        value={person.firstName}
                        onChange={e => handleInputChange(e, index)}
                        variant="outlined"
                      />
                      <BasicTextFields
                        className="mt-2"
                        name="lastName"
                        label="LastName"
                        value={person.lastName}
                        onChange={e => handleInputChange(e, index)}
                      /></div>

                    <div>
                      {personList.length !== 1 &&
                        <Button
                          className='mp-2'
                          variant='outlined'
                          onClick={() => handleRemoveClick(index)}
                        >
                          Remove User
                        </Button>
                      }
                      {personList.length - 1 === index &&
                        <Button
                          className='mp-2'
                          variant='contained'
                          onClick={handleAddClick}
                        >
                          Add User
                        </Button>}
                    </div>
                  </div>
                );
              })}

              {/* <div className="mt-2" ><BasicTextFields className="mt-2" label="MiddleName" /></div> */}

              <div> <h6> Credit Card Info </h6></div>
              <label htmlFor='cardType' className='form-label'>Card Type</label>
              <select value={cardType}
                className="form-control"
                name='cardType'
                onChange={(e) => onCardInputChange(e)}
              >
                <option value="VISA">VISA</option>
                <option value="MASTERCARD">MASTER CARD</option>
              </select>

              <label htmlFor='cardNumber' className='form-label'>Credit Card Number </label>
              <input
                type={"number"}
                className="form-control"
                placeholder='Enter credit card number'
                name='cardNumber'
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

              <Link className="mt-2 btn btn-primary"
                to="/Bookinghistory"
                onClick={showSuccessPopup}
                label="Continue"
              >
                Continue
              </Link>

              {/* <div className="mt-2" >
                <SelectDropdown
                  className="mt-2"
                  // value={cardType}
                  label="Card Type"
                  // onChange={(e) => onCardInputChange(e)}
                /></div>
              <div className="mt-2" ><BasicTextFields
                className="mt-2"
                label="Card Number" /></div>
              <div className="mt-2" ><DatePickerTravel
                className="mt-2"
                label="Expiration date" /></div>
              <div className='mt-2'><BasicTextFields
                label="CVV"
                variant="outlined"
                id="outline-basic"
              /></div>
              <Link className="mt-2 btn btn-primary" to="/Bookinghistory" onClick={showSuccessPopup} label="Continue">Continue</Link> */}

              {/* <div className="mt-2" >
                <SelectDropdown className="mt-2" value={cardType} label="Card Type"
                  onChange={onCardTypeChange} /></div>
              <div className="mt-2" ><BasicTextFields className="mt-2" label="Card Number" /></div>
              <div className="mt-2" ><DatePickerTravel className="mt-2" label="Expiration date" /></div>
              <div className='mt-2'><BasicTextFields label="CVV" variant="outlined" id="outline-basic" /></div>
              <Link className="mt-2 btn btn-primary" to="/Bookinghistory" onClick={showSuccessPopup} label="Continue">Continue</Link> */}

              {/* <Link to="/bookform" className="btn btn-primary">Se</Link> */}
            </FormControl>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Bookform;