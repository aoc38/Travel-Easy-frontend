import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom';
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import "./hotel-bookings.css";
import { getHotelById } from './hotel-service';

function HotelBooking(props) {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [card, setCard] = useState({});
    const { id } = useParams();
    const { checkindate } = useParams();
    const { checkoutdate } = useParams();
    const { guestcount } = useParams();
    const { roomcount } = useParams();
    const { cardNumber, cardOwnerName, cvv, expiryDate, cardType } = card;
    const [value, setValue] = useState("Debit/Credit Card");
    // Use Navigate
    const navigate = useNavigate();
    let data = getHotelById(id);
    let hotel = data.length == 1 ? data[0] : {};
    const MILISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

    

    
    function dayDifference(checkindate, checkoutdate) {
      const timeDiff = Math.abs(checkoutdate.getTime() - checkindate.getTime());
      const diffDays = Math.ceil(timeDiff / MILISECONDS_PER_DAY);
      return diffDays;
    }
  
    // get days using actual date define function
    //const days = dayDifference(checkoutdate, checkindate);
    //const total = days * roomcount * hotel.offers[0].price.base;

    const days = 1;
    const total_price = days * roomcount * hotel.offers[0].price.base;

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
          //navigate('/searchFlight');
        } catch (error) {
          console.log(`ERROR: ${error}`);
        }
    }

    const handleClick = () => {
        
    };

   

    return (
        <div className='container'>
            <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                    <Card style={{ margin: 10 }}>
                        <CardContent>
                        <div className="row">
                            <h2>Secure booking — only takes 2 minutes!</h2>   
                        </div> 
                        </CardContent>
                    </Card>
                    <Card style={{ margin: 10 }}>
                <CardContent>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='mb-3'>
                    
                    
                    <div class='required-field'>
                        <label htmlFor='firstname' className='form-label'>First name</label>
                    </div>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder='(eg : John)'
                        name='firstName'
                        value={firstName}
                       // onChange={setfirstName(firstName)}
                    
                    />
                    <div class='required-field'>
                        <label htmlFor='lastName' className='form-label'> Last name </label>
                    </div>
                    
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder='(eg : Smith)'
                        name='lastName'
                        value={lastName}
                       // onChange={setlastName(lastName)}
                    />
                    <div class='required-field'>
                        <label htmlFor='email' className='form-label'> Email </label>
                    </div>
                    <input
                        type={"email"}
                        className="form-control"
                        placeholder='So the property can reach you'
                        name='email'
                        value={email}
                       // onChange={setmobile(mobile)}
                    />
                    </div>
                </form>
                </CardContent>
                </Card>
                <TabContext value={value}>
        <Paper square>
            <Tabs
            initialSelectedIndex="Debit/Credit Card"
            value={value}
            textColor="primary"
            indicatorColor="primary"
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            >
            <Tab label="Debit/Credit Card" value="Debit/Credit Card"/>
            </Tabs>
                <TabPanel value="Debit/Credit Card">
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='mb-3'>
                    <div class='required-field'>
                        <label htmlFor='cardOwnerName' className='form-label'>Name on Card </label>
                    </div>
                    <input
                        type={"text"}
                        className="form-control brdr-top"
                       // placeholder='Enter name on the credit card'
                        name='cardOwnerName'
                        value={cardOwnerName}
                       // onChange={(e) => onCardInputChange(e)}
                    />
                    <div class='required-field'>
                        <label htmlFor='cardType' className='form-label'>Card Type</label>
                    </div>
                    
                    <select value={cardType}
                        className="form-control"
                        name='cardType'
                        //onChange={(e) => onCardInputChange(e)}
                    >
                        <option value="VISA">VISA</option>
                        <option value="MASTERCARD">MASTER CARD</option>
                    </select>
                    <div class='required-field'>
                        <label htmlFor='cardNumber' className='form-label'>Debit/Credit card number </label>
                    </div>
                    <input
                        type={"number"}
                        className="form-control"
                        //placeholder='Enter credit card number'
                        name='cardNumber'
                        minLength={16}
                        maxLength='16'
                        value={cardNumber}
                        //onChange={(e) => onCardInputChange(e)}
                    />
                    <div class='required-field'>
                        <label htmlFor='expiryDate' className='form-label'>Expiration date </label>
                    </div>
                    <input
                        type={"month"}
                        className="form-control"
                        //placeholder='Enter credit card expiry in mm/yy format'
                        name='expiryDate'
                        value={expiryDate}
                       // onChange={(e) => onCardInputChange(e)}
                    />
                    <div class='required-field'>
                        <label htmlFor='cvv' className='form-label'>Security code </label>
                    </div>
                    <input
                        type={"number"}
                        minLength={3}
                        maxLength='3'
                        className="form-control"
                       // placeholder='Enter cvv'
                        name='cvv'
                        value={cvv}
                       // onChange={(e) => onCardInputChange(e)}
                    />
                </div>
            </form>
            </TabPanel>
        </Paper>
        </TabContext>
            </div>
            <div className="hotelDetailsPrice">
                  <h1>{hotel.hotel.name}</h1>
                  <span>{hotel.hotel.distance}</span>
                  <span>Property 1: {hotel.offers[0].room.typeEstimated.category}, {hotel.offers[0].room.typeEstimated.bedType}</span>
                  <span>Check-in: {checkindate}</span>
                  <span>Check-out: {checkoutdate}</span>
                  <span>Travelers: {guestcount}</span>
                  <h1>Price Details</h1>
                  <span>{roomcount} room * {days} night : ${total_price}</span>
                  <button onClick={handleClick}>Reserve or Book Now!</button>
             </div>
            </div>
        </div>
        
    );

}

export default HotelBooking;
