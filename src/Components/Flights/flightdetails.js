import React from 'react';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { Link, useParams } from "react-router-dom";
import "./flightdetails.css";
import { getFlightById } from './flight-service';


function Flightdetails(props) {
    const { id } = useParams()
    let data = getFlightById(id); //check whether data is valid or not, array should not be empty
    let flight = data.length == 1 ? data[0] : {};

    return (
        <div className='container'>
            <Card style={{ margin: 10 }}>
                <CardContent>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <span className="fromto">{flight.segment[0].origin}</span>
                                {"-"}
                                <span>{flight.segment[flight.segment.length - 1].destination}</span>
                            </div>
                        </div>

                        <div className='col-md-12'>
                            <div className="brdr-btm">
                                <span>Departure</span>{": "}
                                <span>{flight.segment[0].departureTime}</span>
                                <span>{"("}</span><span>arrives {flight.segment[flight.segment.length - 1].arrivalTime} </span><span>{")"}</span>
                                <span style={{ float: "right" }}>{"20hr15min"}</span>
                            </div>
                        </div>
                        {flight.segment.map((segment, i) => {
                            return (
                                <div className='col-md-12' key={i}>
                                    <div className="col-md-2" style={{ display: "inline-block" }}>
                                        <div className="">{flight.company}</div>
                                        <div>{"Flight 212"}</div>
                                        <div>{"Boeing"}-{"332154"}</div>
                                    </div>
                                    <div className="col-md-4" style={{ display: "inline-block" }}>
                                        <div className="">{"7:10"}</div>
                                        <div>{"Houston"}, {"TX"}</div>
                                        <div>{"("} {"IAH"} {")"}-{"George Bush Intercon"}</div>
                                    </div>
                                    <div className="col-md-4" style={{ display: "inline-block" }}>
                                        <div className="">{"7:10"}</div>
                                        <div>{"Houston"}, {"TX"}</div>
                                        <div>{"("} {"IAH"} {")"}-{"George Bush Intercon"}</div>
                                    </div>
                                    <div className="col-md-2" style={{ display: "inline-block" }}>
                                        <div>{"14hr35m"}</div>
                                    </div>

                                </div>
                            )
                        })}


                        {/* <div className='col-md-12'>
                            <div className="col-md-2" style={{ display: "inline-block" }}>
                                <div className="">{"qatar"}</div>
                                <div>{"Flight 212"}</div>
                                <div>{"Boeing"}-{"332154"}</div>
                            </div>
                            <div className="col-md-4" style={{ display: "inline-block" }}>
                                <div className="">{"7:10"}</div>
                                <div>{"Houston"}, {"TX"}</div>
                                <div>{"("} {"IAH"} {")"}-{"George Bush Intercon"}</div>
                            </div>
                            <div className="col-md-4" style={{ display: "inline-block" }}>
                                <div className="">{"7:10"}</div>
                                <div>{"Houston"}, {"TX"}</div>
                                <div>{"("} {"IAH"} {")"}-{"George Bush Intercon"}</div>
                            </div>
                            <div className="col-md-2" style={{ display: "inline-block" }}>
                                <div>{"14hr35m"}</div>
                            </div>

                        </div>
                        <div>Connection in {"Dubai"}, {"United Arab Emirates"}</div>
                        <div className='col-md-12'>
                            <div className="col-md-2" style={{ display: "inline-block" }}>
                                <div className="">{"qatar"}</div>
                                <div>{"Flight 212"}</div>
                                <div>{"Boeing"}-{"332154"}</div>
                            </div>
                            <div className="col-md-4" style={{ display: "inline-block" }}>
                                <div className="">{"7:10"}</div>
                                <div>{"Houston"}, {"TX"}</div>
                                <div>{"("} {"IAH"} {")"}-{"George Bush Intercon"}</div>
                            </div>
                            <div className="col-md-4" style={{ display: "inline-block" }}>
                                <div className="">{"7:10"}</div>
                                <div>{"Houston"}, {"TX"}</div>
                                <div>{"("} {"IAH"} {")"}-{"George Bush Intercon"}</div>
                            </div>
                            <div className="col-md-2" style={{ display: "inline-block" }}>
                                <div>{"14hr35m"}</div>
                            </div>

                        </div> */}
                        {/* <button className='btn btn-primary'>Book Now</button> */}
                        {/* <Link to="/BookForm" className='btn btn-primary'>Book Now</Link> */}
                        <Link to="/Usermiles" className='btn btn-primary'>Book Now</Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Flightdetails;