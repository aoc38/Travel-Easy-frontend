import React, { useState } from "react";
import { Form, Link, useParams } from "react-router-dom";
import { getFlightById } from './flight-service';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';

function Usermiles() {
  //get logged in user info 
  let loggedinUser = JSON.parse(localStorage.getItem("user-info"));
  console.log("logged data in UserMiles : ", loggedinUser);
  const userData = (loggedinUser);

  //getting params from url
  const { id,pc } = useParams();
  console.log("data in Flight details page: ", id);
  let data = getFlightById(id);
  let flight = data.length == 1 ? data[0] : {};
  flight.miles = pc * flight.miles;
  console.log("flight details in user miles : ", flight);
  


  // const [accumulatedMiles, setAccumulatedMiles] = useState(0);
  // const [redeemedMiles, setRedeemedMiles] = useState(0);

  const getAccMiles = (flight) => {
    if (data == null || data.userMiles == null) {
      return 0;
    }
    //need to get from user object
    
  }

  const getReqMiles = (flight) => {
    return flight.miles;
    //need to get from user object
    
  }

  
  


  

  //checkbox for user miles
  const [isUserMilesChecked, setIsUserMilesChecked] = useState(false);

  return (
    <div className='container'>
      <Card style={{ margin: 10 }}>
        <CardContent>
          <div className="row">
            <div className="col-md-12">
              <div className="brdr-btm">
                <span>UserMiles Info </span>
                <div className='col-md-12'>
                  <div className="brdr-btm">
                    <span>Miles Available   </span>{": "}
                    <span>{getAccMiles(flight)}</span>
                  </div>
                  <div className="brdr-btm">
                    <span>Miles Required   </span>{": "}
                    <span>{getReqMiles(flight)}</span>
                  </div>
                </div>
                <div>
                  <input type="checkbox"
                    checked={isUserMilesChecked}
                    onChange={(e) => { setIsUserMilesChecked(e.target.checked) }} />
                 <label>Do you want to use miles?</label>
                
                  
                </div>
              </div>
            </div>
          </div>
          
        </CardContent>
        <Link to= {{ pathname: `/bookForm/${id}/${pc}` }}  className='btn btn-primary'>Checkout</Link>
      </Card>
    </div>

  );
  // <div>
  //   <div className='container'>
  //     <div className='row'>
  //       <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
  //         {/* <FormGroup>
  //         <FormControlLabel
  //           control={<Checkbox />}
  //           label="Do you want to use miles?"
  //         />

  //       </FormGroup> */}


  //         <div className='col-md-12'>
  //           <div className="brdr-btm">
  //             <span>Miles Available </span>{": "}
  //             <span>{()=>getAccMiles(userData)}</span>
  //           </div>
  //         </div>
  //         {/* <input type="checkbox"
  //         checked = {isUserMilesChecked}
  //         onChange={(e) => {setIsUserMilesChecked(e.target.checked)}} />
  //         <Form.label> Do you want to use miles?
  //         </Form.label> */}
  //         <Link to="/BookForm" className='btn btn-primary'>Checkout</Link>
  //       </div>
  //     </div>
  //   </div>
  // </div>

  <>
  </>
}
export default Usermiles;
