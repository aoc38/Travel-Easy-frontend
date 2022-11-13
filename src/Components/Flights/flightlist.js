import React from "react";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import "./flightlist.css";

function FlightList(props) {

  const getSource = (flight) => {
    return flight.segment[0].origin
  }

  const getDestination = (flight) => {
    return flight.segment[flight.segment.length - 1].destination
  }

  const getStartTime = (flight) => {
    return flight.segment[0].departureTime;
  }

  const getEndTime = (flight) => {
    return flight.segment[flight.segment.length - 1].arrivalTime;
  }

  const getTimings = (flight) => {
    return getStartTime(flight) + " - " + getEndTime(flight);
  }

  const getStops = (flight) => {
    return flight.segment.length
  }

  const getDuration = (flight) => {
    let start = new Date(getStartTime(flight));
    let end = new Date(getEndTime(flight));
    return Math.round(Math.abs(end - start) / 36e5);
  }

  return (
    <div className="list-flight">
      <div>

      </div>
      {props.flights.map((flight, i) => {
        return (
          <CardContent key={flight.id}>
            <div className="flex-container">
              <div>
                <h5>{getSource(flight)}</h5>
                <p>{getTimings(flight)}</p>
              </div>
              <div>
                <h5>{flight.company}</h5>
              </div>
              <div>
                <h5>{getDestination(flight)}</h5>
                <div>{getStops(flight)} stop's {getDuration(flight)} hours</div>
              </div>
              <div>
                <h5>${flight.price}</h5>
                {/* <Link to={{ pathname: "/flightdetails/'${this.props.testvalue}", state: { flight } }} className="btn btn-primary">Select</Link> */}
                <Link to={{ pathname: `/flightdetails/${flight.id}` }} className="btn btn-primary" >Select</Link>

              </div>
            </div>
          </CardContent>
        )
      })}
    </div>
  );
}

export default FlightList;
