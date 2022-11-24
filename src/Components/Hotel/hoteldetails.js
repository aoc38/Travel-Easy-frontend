import React from 'react';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { Link, useParams } from "react-router-dom";
import "./hoteldetails.css";
import { getHotelOffers } from '../../services/hotel/amadeus-api-service';


function hoteldetails(props) {
    const { id } = useParams()
    let data = getHotelOffers(id); //check whether data is valid or not, array should not be empty
    let hotel = data.length == 1 ? data[0] : {};
    console.log("hotel details" , hotel);

    return (
        <div className='container'>
            <Card style={{ margin: 10 }}>
                <CardContent>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <span className="fromto">{hotel.name}</span>
                                {"-"}
                                <span>{hotel.name}</span>
                            </div>
                        </div>
                       
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default hoteldetails;