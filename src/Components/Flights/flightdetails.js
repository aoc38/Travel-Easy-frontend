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
        <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <div className="text-center m-4">
              {" "}
              <h2> Review Flight Booking</h2>{" "}
            </div>
            <div className="row text-center">
              <div class="col s12 m6 text-center">
                <span className="text-bold">Source </span>
              </div>
              <div class="col s12 m6 text-center">
                <span className="text-bold"> Destination</span>
              </div>
              <div class="col s12 m6 text-center">
                <span className="text-bold"> Airline</span>
              </div>
            </div>
            <div className="row text-center">
              <div class="col s12 m6 text-center">
                <span className="fromto">{flight.departureCityName}</span>
              </div>
              <div class="col s12 m6 text-center">
                <span>{flight.arrivalCityName}</span>
              </div>
              <div class="col s12 m6 text-center">
                <span>{flight.airline}</span>
              </div>
            </div>
            <div className="add-space"></div>
            <div className="row">
              <div class="col s12 m6 text-center">
                <span className="text-bold">Departure time </span>
              </div>
              <div class="col s12 m6 text-center">
                <span className="text-bold"> Arrival Time</span>
              </div>
            </div>
            <div className="row">
              <div class="col s12 m6 text-center">
                <span className="fromto">{flight.departureTime}</span>
              </div>
              <div class="col s12 m6 text-center">
                <span>{flight.arrivalTime}</span>
              </div>
            </div>

            <div className="add-space"></div>
  
            <div className="row text-center">
              <div class="col s12 m6 ">
                <span className="text-bold">Flight Price </span>
              </div>
              <div class="col s12 m6 ">
                <span className="text-bold"> Tax Fee</span>
              </div>
              <div class="col s12 m6 ">
                <span className="text-bold">Total Price</span>
              </div>
            </div>
            <div className="row text-center">
              <div class="col s12 m6 ">
                <span className="fromto">{getPrice(flight)}$</span>
              </div>
              <div class="col s12 m6">
                <span> {taxAmont(flight)}$</span>
              </div>
              <div class="col s12 m6">
                <span>{getTotalPrice(flight)}$</span>
              </div>
            </div>
  
            {loggedinUser ? (
              <>
              
                <div className="text-center">
                  {" "}
                  <Link
                    to={{ pathname: `/usermiles/${id}/${noOfPassengers}` }}
                    className="btn btn-outline-primary m-4"
                  >
                    Book Now
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  {" "}
                  <Link to="/loginuser" className="btn btn-outline-primary m-4">
                    Proceed
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>


        
    );
}

export default Flightdetails;