import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import "../Flights/flightlist.css";

function DealsList(props) {
  const getSource = (flight) => {
    return flight.segment[0].origin;
  };

  const getDestination = (flight) => {
    return flight.segment[flight.segment.length - 1].destination;
  };

  const getPrice = (flight) => {
    return flight.price;
  };

  return (
    <div className="list-flight">
      <div>

      </div>
      {props.flights.length === 0 && <div>No Deals Found</div>}
      {props.flights.map((flight, i) => {
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
                  <h5>${getPrice}</h5>
                  
                  <Link
                    to={{ pathname: `/flightdetails/${flight.id}` }}
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
