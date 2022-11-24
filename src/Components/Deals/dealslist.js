import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import { parse } from 'tinyduration';
import "../Flights/flightlist.css";
import { getDeals, getAirports, getFilterStrategies } from "./deals-service";

function DealsList(props) {

  const getSource = (flight) => {
   // return flight.segment[0].origin;
    return flight.departureCityName;
  };

  const getDestination = (flight) => {
    //return flight.segment[flight.segment.length - 1].destination;
    return flight.arrivalCityName;
  };

  const getPrice = (flight) => {
    return flight.deals_price;
  };

  const getPriceinMiles = (flight) => {
    return flight.miles;
  };

  const isValid = () => {
    if (props.hasOwnProperty("deals") && props.deals.length !== 0) {
      return true;
    }
    return false;
  }
  return (
    <div className="list-flight">
      {!isValid() ?

        <div>No Deals Found</div> :
        
      props.deals.map((flight, i) => {
        return (
          
          <Card style={{ margin: "10px" }} className="card-list">
         
            <CardContent key={flight.id}>
              <div className="flex-container">
                <div>
                  <h5>{getSource(flight)}</h5>
                </div>
                <div>
                  <h5>{getDestination(flight)}</h5>
                </div>
              <div>
                  <h5>${getPrice(flight)}</h5>
                  
                  <Link
                    to={{ pathname: `/dealsdetails/${flight.id}`, state:"isMiles: false"  }}
                    className="btn btn-primary"
                  >
                    Select
                  </Link>
              </div>
              <div>
                  <h5>{getPriceinMiles(flight)} miles</h5>
                  
                  <Link
                    to={{ pathname: `/dealsdetails/${flight.id}`, state:"isMiles: true"}}
                    className="btn btn-primary"
                  >
                    Select
                  </Link>
        </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
      
    </div>
  );
}

export default DealsList;
