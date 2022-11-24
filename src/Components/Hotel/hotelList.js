import React from "react";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import { parse } from 'tinyduration';
import "./hotelList.css";
import {getHotelOffers} from '../../services/hotel/amadeus-api-service'

function HotelList(props) {

  

  const getDestination = (hotel) => {
    return hotel.iataCode;
  }

  const getHotelName = (hotel) => {
    return hotel.name;
  }

  const getHotelId = (hotel) => {
    return hotel.hotelId;
  }

  

  

  


  const isValid = () => {
    /*if (props.hasOwnProperty("hotel") && props.hotel.hasOwnProperty("data") && props.hotel.data.length !== 0) {
      return true;
    } */
    return true;
  }

  return (
    <div className="list-hotel">
      {
        props.hotels.data.map((hotel, i) => {
          return (
            <Card style={{ margin: "10px" }} className="card-list">
                <CardContent key={hotel.hotelId}>
                <div className="flex-container">
                  <div>
                    <h5>{getHotelName(hotel)}</h5>
                  </div>
                  <div>
                   
                    {/* <Link to={{ pathname: "/flightdetails/'${this.props.testvalue}", state: { flight } }} className="btn btn-primary">Select</Link> */}
                    <Link to={{ pathname: `/hoteldetails/${hotel.hotelId}` }} className="btn btn-primary" >Select</Link>

                  </div>
                 
                  
                </div>
            </CardContent>
            </Card>
          )
        })}
    </div>
  );
}

export default HotelList;
