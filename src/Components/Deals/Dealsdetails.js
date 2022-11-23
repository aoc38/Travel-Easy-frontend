import React from 'react';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { Link, useParams } from "react-router-dom";
import "../Flights/flightdetails.css";
import { getFlightById } from '../Flights/flight-service';


function Dealsdetails() {

    //getting logged in user from local storage
    let loggedinUser = JSON.parse(localStorage.getItem("user-info"));
    console.warn(loggedinUser);

    //getting id from path 
    const { id,pc } = useParams()
    
    console.log("data in Flight details page: ", id);
    console.log("passenger count in Flight details page: ", pc);
    let data = getFlightById(id);
    let flight = data.length == 1 ? data[0] : {};
    console.log("flight details", flight);
    //let noOfPassengers = pc;
    // let data = getFlightById(id); //check whether data is valid or not, array should not be empty
    // let flight = data.length == 1 ? data[0] : {};
    // console.log("flight details" , flight);
    const getPrice = (flight) => {
        return flight.deals_price;
      }
   
      const getPriceMiles = (flight) => {
        return flight.miles;
      }

      const getTotalPrice_miles = (flight) =>{
        return getPriceMiles(flight);
    }

    const getTotalPrice = (flight) =>{
        return getPrice(flight);
    }
    return (
        <div className='container'>
            <Card style={{ margin: 10 }}>
                <CardContent>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <span className="fromto">{flight.departureCityName}</span>
                                {"-"}
                                <span>{flight.arrivalCityName}</span>
                                </div>

                        </div>


                        <div className='col-md-12'>
                            <div className="brdr-btm">
                                <span>Departure</span>{": "}
                                
                                <span>{flight.departureTime}</span>
                                <span>{"("}</span><span>arrives {flight.arrivalTime} </span><span>{")"}</span>

                            </div>
                        </div>
                      
                       
                        <div className='col-md-12'>
                            <div className="brdr-btm">
                                <span>Total Price in Dollars</span>{": "}
                                <span>${getTotalPrice(flight)}</span>
                            </div>
                        </div>

                        <div className='col-md-12'>
                            <div className="brdr-btm">
                                <span>Total Price in Miles</span>{": "}
                                <span>{getTotalPrice_miles(flight)} miles</span>
                            </div>
                        </div>

                        {

                            localStorage.getItem("user-info") ?
                                <>
                                
                                    <Link to={{ pathname: `/usermiles/${id}` }} className='btn btn-primary'>Book Now</Link>
                                </>
                                :
                                <>
                                    <Link to="/loginuser" className='btn btn-primary'>Book Now</Link>
                                </>
                        }

                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Dealsdetails;