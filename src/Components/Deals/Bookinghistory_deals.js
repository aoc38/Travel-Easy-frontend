import React from 'react';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import "../Flights/bookinghistory.css";
import { getFlightById } from '../Flights/flight-service';


function BookinghistoryDeals(props) {

    let data = getFlightById(id);
    let flight = data.length == 1 ? data[0] : {};

    return (
        <div>
            <Card style={{ margin: 10 }}>
                <CardContent><div>Purchased Deals</div></CardContent>
            </Card>
            
            <Card style={{ margin: 10 }}>
                <CardContent>
                    <div className='row brdr-btm'>

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
                                <span>Journey in </span>{": "}
                                
                                <span></span>
                                <span>{"("}</span><span> </span><span>{")"}</span>

                            </div>
                        </div>
                      
                 
                    </div>
                    
                </CardContent>
            </Card>
        </div>
    );
}

export default BookinghistoryDeals;