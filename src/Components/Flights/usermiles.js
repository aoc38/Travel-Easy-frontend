import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFlightById } from "./flight-service";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Usermiles() {
  //getting params from url
  const { id, pc } = useParams();
  console.log("data in Flight details page: ", id);
  let data = getFlightById(id);
  let flight = data.length === 1 ? data[0] : {};
  console.log("flight details in user miles : ", flight);

  if (pc != 0) {
    flight.miles = pc * flight.miles;
  }

  // const [accumulatedMiles, setAccumulatedMiles] = useState(0);
  // const [redeemedMiles, setRedeemedMiles] = useState(0);

  const getAccMiles = (flight) => {
    let data = JSON.parse(sessionStorage.getItem("user-info"));
    if (data === null || data.userMiles === null) {
      // setIsUserMilesCheckbox(true);
      return 0;
    }
    //need to get from user object
  };

  const getReqMiles = (flight) => {
    return flight.miles;
  };

  //toggle checkbox based on user miles
  // const [ usermilesCheckbox, setIsUserMilesCheckbox ] = useState(false);

  //checkbox for user miles
  const [isUserMilesChecked, setIsUserMilesChecked] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <div className="text-center m-4">
            <h2>User Miles</h2>
          </div>

          <div className="row text-center">
            <div class="col s12 m6 ">
              <span className="text-bold">
                {" "}
                <span> Available Miles </span>
              </span>
            </div>
            <div class="col s12 m6 ">
              <span className="text-bold">
                {" "}
                <span>Required Miles </span>
              </span>
            </div>
          </div>
          <div className="row text-center">
            <div class="col s12 m6">
              <span>{getAccMiles(flight)}</span>
            </div>
            <div class="col s12 m6">
              <span>{getReqMiles(flight)}</span>
            </div>
          </div>
          <div className ="add-space"></div>
          <div className ="add-space"></div>
        
         <div className="text-center text-bold"> <label>Do you want to use miles?</label>
        
          <input
            type="checkbox"
            //  disabled={usermilesCheckbox}
            checked={isUserMilesChecked}
            onChange={(e) => {
              setIsUserMilesChecked(e.target.checked);
            }}
          />
          
            </div>
            <div className="add-space"></div>
            <div className="add-space"></div>
            <div className="add-space"></div>

            {(pc=0) ?
            (
            <>
                <div className="text-center">
          <Link
            to={{ pathname: `/bookForm/${id}` }}
            className="btn btn-outline-primary m-4"
          >
            Checkout
          </Link>
          </div>
            
            </>
            ):
            (
              <>
                <div className="text-center">
          <Link
            to={{ pathname: `/bookForm/${id}/${pc}` }}
            className="btn btn-outline-primary m-4"
          >
            Checkout
          </Link>
          </div>
              </>
              )

            }
          
        </div>
      </div>
    </div>
  );
}
export default Usermiles;
