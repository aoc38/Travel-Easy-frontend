import React from 'react'
import Card from '../Common/Card';
import { CardContent } from '@mui/material';

export default function FlightStatusList(props) {


  const isValid = () => {
    console.log("flights data", props.fsdata);
    if (props.hasOwnProperty("fsdata") && props.fsdata !== null) {
      return true;
    }
    return false;
  }
  return (
    <div>
      {!isValid() ?
        <div>No Flights Found</div> :
        <div>
          <Card style={{ margin: "10px" }} className="card-list">
            <CardContent >
              <div className="flex-container">
                <div>
                  <h5>{props.fsdata.airline}</h5>
                  {/* <p>{getTimings(flight)}</p> */}
                </div>
                <div>
                  <h5>{props.fsdata.flightNumber}</h5>
                  {/* <p>{getTimings(flight)}</p> */}
                </div>
                <div>
                  <h5>{props.fsdata.airline}</h5>
                  {/* <p>{getTimings(flight)}</p> */}
                </div>

                {/* <div>
            <h5>{flight.airline}</h5>
          </div>
          <div>
            <h5>{getDestination(flight)}</h5>
          </div>
          <div>
            <h5>${getPrice(flight)}</h5>
            <Link to={{ pathname: `/flightdetails/${flight.id}/${props.noOfPassengers}` }} className="btn btn-primary" >Select</Link>

          </div> */}
              </div>
            </CardContent>
          </Card>
        </div>
      }
    </div>

  )
}
