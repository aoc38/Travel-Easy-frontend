import React from 'react';
import { Link, useLocation, useParams } from "react-router-dom";
import { getFlightById } from '../Flights/flight-service';
import "../Flights/flightdetails.css";


function Dealsdetails(props) {

    const location=useLocation();
    const isMiles = location.state?.isMiles;
    

    console.log(isMiles);
    //getting logged in user from local storage
    let loggedinUser = JSON.parse(localStorage.getItem("user-info"));
    console.warn(loggedinUser);

    //getting id from path 
    const { id,pc } = useParams()
    
    console.log("data in Flight details page: ", id);
    console.log("passenger count in Flight details page: ", pc);
    let data = getFlightById(id);
    let flight = data.length === 1 ? data[0] : {};
    console.log("flight details", flight);
    
    const getPrice = (flight) => {
        return flight.deals_price;
      }
   
      const getPriceMiles = (flight) => {
        return flight.miles;
      }

      const getTotalPrice_miles = (flight) =>{
        return getPriceMiles(flight);
    }

    const getTotalPrice = (flight) =>{
        return getPrice(flight);
    }
    return (
        <div className='container'> 
            
                    <div className="row">
                        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                           <div className='text-center m-4'>  <h2> Review Deal</h2> </div>
                            <div className="title">
                                <span className='text-bold'>Source: </span>
                                <span className="fromto">{flight.departureCityName}</span>
                            </div>
                            <div className ="title">
                                <span className ='text-bold'> Destination:</span>
                                <span>{flight.arrivalCityName}</span>
                            </div>
                            <div className="title">
                                <span className='text-bold'>Departure Date</span>{": "}
                                <span>{flight.departureDate}</span>
                            </div>
                            <div className="title">
                                <span className='text-bold'>Arrival Date: </span><span> {flight.arrivalDate} </span>

                            </div>
                            <div className="title">
                                <span className='text-bold'>Total Price in Dollars</span>{": "}
                                <span>${getTotalPrice(flight)}</span>
                            </div>
                            <div className="title">
                                <span className='text-bold'>Total Price in Miles</span>{": "}
                                <span>{getTotalPrice_miles(flight)} miles</span>
                            </div>

                       

                        {

                            localStorage.getItem("user-info") ?
                                <>
                                
                                    <Link to={{ pathname: `/usermiles/${id}` }} className='btn btn-primary'>Book Now</Link>
                                </>
                                :
                                <>
                                   <div className='text-center'> <Link to="/loginuser" className='btn btn-outline-primary m-4'>Proceed</Link></div>
                                </>
                        } 
                    </div> 
                    </div>
              
       </div> 
    );
}

export default Dealsdetails;