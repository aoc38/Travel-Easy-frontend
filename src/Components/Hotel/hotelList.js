import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getHotelById } from './hotel-service';
import "./hotelList.css";

function HotelList(props) {

  const hotel_data = props.hotels;
  console.log("In hotel list : " + hotel_data[0]);


  // const [hotelOffer, setHotelOffer] = useState([]);
  const getDestination = (hotel) => {
    return hotel.iataCode;
  }

  const getHotelName = (hotel) => {
    return hotel.name;
  }

  return (
    <div className="list-hotel">
      {
        props.hotels.map((hotel, i) => {
          return (
            <Card style={{ margin: "10px" }} className="card-list" key={i} id={i}>
              <CardContent key={hotel.hotelId}>
                <div className="searchItem">
                  <img src={hotel.hotel.photo1} alt="" className="isImg" />
                  <div className="isDesc">
                    <h1 className="isTitle">{getHotelName(hotel)}</h1>
                    <span className="isDistance">{hotel.hotel.distance}</span>
                    <span className="isTaxiOp">Free airport taxi</span>
                    <span className="isSubtitle">
                      {hotel.hotel.tagline}
                    </span>
                    <span className="isFeatures">{hotel.offers[0].room.description.text}</span>
                    <span className="isCancelOp">Free cancellation </span>
                    <span className="isCancelOpSubtitle">
                      You can cancel later, so lock in this great price today!
                    </span>
                  </div>
                  <div className="isDetails">
                    <div className="isDetailTexts">
                      <span className="isPrice">${hotel.offers[0].price.base}</span>
                      <span className="isTaxOp">Includes taxes and fees</span>
                      {JSON.parse(sessionStorage.getItem("flight-data")) ?
                        <Link to={{ pathname: `/flighthotelbooking/${props.checkInDate}/${props.checkOutDate}/${props.guestsCount}/${props.roomCount}/${hotel.hotelId}` }}>
                          <button className="isCheckButton">Select</button>
                        </Link>
                        :
                        <Link to={{ pathname: `/hotelbooking/${props.checkInDate}/${props.checkOutDate}/${props.guestsCount}/${props.roomCount}/${hotel.hotelId}` }}>
                          <button className="isCheckButton">See availability</button>
                        </Link>
                      }

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
