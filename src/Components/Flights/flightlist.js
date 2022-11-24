import React from "react";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import { parse } from 'tinyduration';
import "./flightlist.css";

function FlightList(props) {

  const getSource = (flight) => {
    return flight.segments[0].departure.iataCode
  }

  const getDestination = (flight) => {
    return flight.segments[flight.segments.length - 1].arrival.iataCode
  }

  const getStartTime = (flight) => {
    return flight.segments[0].departure.at;
  }

  const getEndTime = (flight) => {
    return flight.segments[flight.segments.length - 1].arrival.at;
  }

  const getTimings = (flight) => {
    return getStartTime(flight) + " - " + getEndTime(flight);
  }

  const getStops = (flight) => {
    return flight.numberOfStops
  }

  const getDuration = (flight) => {
    let duration = parse(flight.duration);
    let value = "";
    if(duration.hasOwnProperty("days")){
      value = value + " "+duration.days +" day's"
    }
    if(duration.hasOwnProperty("hours")){
      value = value + " "+duration.hours +" Hour's"
    }
    if(duration.hasOwnProperty("minutes")){
      value = value + " "+duration.minutes +" Minutes's"
    }
    // return Math.round(Math.abs(end - start) / 36e5);
    return value;
  }

  const isValid = () => {
    if (props.hasOwnProperty("flights") && props.flights.hasOwnProperty("data") && props.flights.data.length !== 0) {
      return true;
    }
    return false;
  }

  return (
    <div className="list-flight">
      {
         !isValid() ?
          <div>"No Flights Found"</div> :
        props.flights.data.map((flight, i) => {
          return (
            <Card style={{ margin: "10px" }} className="card-list">
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
                    <div>{getStops(flight)} stop's {getDuration(flight)}</div>
                  </div>
                  <div>
                    <h5>${flight.price}</h5>
                    {/* <Link to={{ pathname: "/flightdetails/'${this.props.testvalue}", state: { flight } }} className="btn btn-primary">Select</Link> */}
                    <Link to={{ pathname: `/flightdetails/${flight.id}` }} className="btn btn-primary" >Select</Link>

                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
    </div>
  );
}

export default FlightList;
