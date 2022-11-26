import React, { useState } from "react";
import { Form, Link, useParams } from "react-router-dom";
import { getFlightById } from "./flight-service";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
function Usermiles() {
  //get logged in user info
  let loggedinUser = JSON.parse(localStorage.getItem("user-info"));
  console.log("logged data in UserMiles : ", loggedinUser);
  const userData = loggedinUser;

  const [accumulatedMiles, setAccumulatedMiles] = useState(0);
  const [redeemedMiles, setRedeemedMiles] = useState(0);

  function getAccMiles(data) {
    if (data == null || data.userMiles == null) {
      setAccumulatedMiles(0);
      console.log(accumulatedMiles);
      return accumulatedMiles;
    }
    return 0;
    //need to display user miles from obj
  }

  //getting id from path
  const { id } = useParams();
  console.log("data in Flight details page: ", id);
  let data = getFlightById(id);
  let flight = data.length == 1 ? data[0] : {};
  console.log("flight details", flight);

  //checkbox for user miles
  const [isUserMilesChecked, setIsUserMilesChecked] = useState(false);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <div className='text-center m-4'>  <h2>Miles Status</h2> </div>
            <div className="row text-center">
              <div class="col s12 m6 ">
              <span className  ="text-bold" > <span>Miles Available </span></span>
              </div>
              <div class="col s12 m6 ">
              <span className  ="text-bold" > <span>Redeemed Miles </span></span>
              </div>
            </div>
            <div className="row text-center">
              
              <div class="col s12 m6">
              <span>{() => getAccMiles(userData)}</span>
            </div>
              <div class="col s12 m6">
                
              </div>
            </div>

            <div className="text-center">
              {" "}
              <Link to="/BookForm" className="btn btn-outline-primary m-4">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Usermiles;
