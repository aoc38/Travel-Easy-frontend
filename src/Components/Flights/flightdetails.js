import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import React from 'react';
import { Link, useParams } from "react-router-dom";
import { getFlightById } from './flight-service';
import "./flightdetails.css";


function Flightdetails() {

    //getting logged in user from local storage
    // let loggedinUser = JSON.parse(localStorage.getItem("user-info"));
    // const { loggedinUser } = useContext(UserContext);
    let loggedinUser = JSON.parse(sessionStorage.getItem("user-info"));
    console.log("loggedinUser in Flight details page : ",loggedinUser);

    //getting id from path 
    const { id, pc } = useParams()

    console.log("data in Flight details page: ", id);
    console.log("passenger count in Flight details page: ", pc);
    let data = getFlightById(id);
    let flight = data.length === 1 ? data[0] : {};
    console.log("flight details in js : ", flight);
    let noOfPassengers = pc;
    // let data = getFlightById(id); //check whether data is valid or not, array should not be empty
    // let flight = data.length == 1 ? data[0] : {};
    // console.log("flight details" , flight);
    const getPrice = (flight) => {
        return flight.price * noOfPassengers;
    }
    const taxAmont = (flight) => {
        return (15 / 100) * getPrice(flight);
    }

    const getTotalPrice = (flight) => {
        return getPrice(flight) + taxAmont(flight);
    }
    return (
        <div className='container'>
            <Card style={{ margin: 10 }}>
                <CardContent>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                {/* <span className="fromto">{flight.segment[0].origin}</span> */}
                                <span className="fromto">{flight.departureCityName}</span>
                                {"-"}
                                {/* <span>{flight.segment[flight.segment.length - 1].destination}</span> */}
                                <span>{flight.arrivalCityName}</span>
                                <div>
                                    <span>{flight.airline}</span>

                                </div>

                            </div>

                        </div>


                        <div className='col-md-12'>
                            <div className="brdr-btm">
                                <span>Departure</span>{": "}
                                {/* <span>{flight.segment[0].departureTime}</span>
                                <span>{flight.segment[0].departureTime}</span>
                                <span>{"("}</span><span>arrives {flight.segment[flight.segment.length - 1].arrivalTime} </span><span>{")"}</span> */}

                                <span>{flight.departureTime}</span>
                                <span>{"("}</span><span>arrives {flight.arrivalTime} </span><span>{")"}</span>

                                {/* <span style={{ float: "right" }}>{"20hr15min"}</span> */}
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="brdr-btm">
                                <span>Flight Price </span>{": "}
                                <span>{getPrice(flight)}</span>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="brdr-btm">
                                <span>Tax&Fee</span>{": "}
                                <span>{taxAmont(flight)}</span>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="brdr-btm">
                                <span>Total Price </span>{": "}
                                <span>{getTotalPrice(flight)}</span>
                            </div>
                        </div>

                        {
                            // localStorage.getItem("user-info") ?
                            loggedinUser ?
                                <>
                                    <Link to={{ pathname: `/usermiles/${id}/${noOfPassengers}` }} className='btn btn-primary'>Book Now</Link>
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

export default Flightdetails;