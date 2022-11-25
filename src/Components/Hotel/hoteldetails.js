import React from 'react';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import "./hoteldetails.css";
import { getHotelOffers } from '../../services/hotel/amadeus-api-service';
import { letterSpacing } from '@mui/system';
var hotelOffers = require('./hotelOffers.json');


function HotelDetails(props) {

    const { id } = useParams()
    
    let hotel = hotelOffers.data[0];

    /*const fetchHotelOffers = async () => {
        let request = {
            
            'hotelId': id
        }
        
        let results = await getHotelOffers(request);
        let data = results.data;
        setHotelOffers(data);
        return data;
    }

    //let data = fetchHotelOffers(); 
    //let hotel = data.length == 1 ? data[0] : {};
    //check whether data is valid or not, array should not be empty
    console.log("hotel details" , hotel);*/

    
    return (
        <div className='container'>
            <Card style={{ margin: 10 }}>
                <CardContent>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <span>{hotel.hotel.name}</span>
                                
                            </div>    
                        </div>
                        <div>
                        <div className='col-md-12'>
                            <div className="brdr-btm">
                                <span>Discription</span>{": "}
                                <span>{hotel.offers[0].room.description.text}</span>
                            </div>
                        </div>

                        <div className='col-md-12'>
                                    <div className="col-md-2" style={{ display: "inline-block" }}>
                                    <img src = {hotel.hotel.photo2}  alt = "image1" height = "250" width = "270"/>
                                        
                                    </div>
                                    <div className="col-md-2" style={{ display: "inline-block" }}>
                                    <img src = {hotel.hotel.photo3}  alt = "image2" height = "250" width = "270"/>
                                       
                                        
                                    </div>
                                    <div className="col-md-4" style={{ display: "inline-block" }}>
                                    <img src = {hotel.hotel.photo4}  alt = "image3" height = "250" width = "270"/>
                                    </div>
                                    
                                    

                                </div>
                                <span className="fromto">{hotel.offers[0].price.base}</span>
                                <span className="fromto">{hotel.offers[0].price.currency}</span>
                    </div>
                        
        
                            
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default HotelDetails;