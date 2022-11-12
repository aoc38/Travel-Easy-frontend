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
                <h5>{getDestination(flight)}</h5>
                <div>{getStops(flight)} stop's {getDuration(flight)} hours</div>
              </div>
              <div>
                <h5>${flight.price}</h5>
                <Link to="/flightdetails" className="btn btn-primary">Select</Link>
              </div>
            </div>
          </CardContent>
        )
      })}
      {/* <Card sx={{ maxWidth: 345 }} style={{ margin: 10 }}>
        <CardContent>
          <div className="flex-container">
            <div>
              <h5>Ethihad</h5>
              <p>4:25am - 10:30pm</p>
            </div>
            <div>
              <h5>IAH-CHENNAI</h5>
              <div>1 Stop 20 hr</div>
            </div>
            <div>
              <h5>$2057</h5>
              <Link to="/flightdetails" className="btn btn-primary">Select</Link>
            </div>
          </div>
        </CardContent>
      </Card> */}

    </div>
  );
}

export default FlightList;
