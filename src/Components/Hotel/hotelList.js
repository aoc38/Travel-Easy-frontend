import React from "react";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import "./hotelList.css";
import {getHotelOffers} from '../../services/hotel/amadeus-api-service'
import HotelDetails from "./hoteldetails";
import { useState } from "react";
import { getHotelById } from './hotel-service';

function HotelList(props) {

 
  const [hotelOffer, setHotelOffer] = useState([]);
  const getDestination = (hotel) => {
    return hotel.iataCode;
  }

  const getHotelName = (hotel) => {
    return hotel.name;
  }

  return (
    <div className="list-hotel">
      {
        props.hotels.data.map((hotel, i) => {
          let result = getHotelById(hotel.hotelId);
          let hotelOffer = result.length == 1 ? result[0] : {};
         // console.log("Booking details : " + props.hotelBookingDetails[0].destination);
          return (
            
            <Card style={{ margin: "10px" }} className="card-list">
                <CardContent key={hotel.hotelId}>
                <div className="searchItem">
                    <img src={hotelOffer.hotel.photo1} alt="" className="isImg" />
                    <div className="isDesc">
                      <h1 className="isTitle">{getHotelName(hotel)}</h1>
                      <span className="isDistance">{hotelOffer.hotel.distance}</span>
                      <span className="isTaxiOp">Free airport taxi</span>
                      <span className="isSubtitle">
                        {hotelOffer.hotel.tagline}
                      </span>
                      <span className="isFeatures">{hotelOffer.offers[0].room.description.text}</span>
                      <span className="isCancelOp">Free cancellation </span>
                      <span className="isCancelOpSubtitle">
                        You can cancel later, so lock in this great price today!
                      </span>
                    </div>
                    <div className="isDetails">
                      <div className="isDetailTexts">
                        <span className="isPrice">${hotelOffer.offers[0].price.base}</span>
                        <span className="isTaxOp">Includes taxes and fees</span>
                        <Link to={{ pathname: `/hoteldetails/${props.checkInDate}/${props.checkOutDate}/${props.guestsCount}/${props.roomCount}/${hotel.hotelId}`}}>
                          <button className="isCheckButton">See availability</button>
                        </Link>
                      </div>
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
