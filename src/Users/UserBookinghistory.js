import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { useState } from "react";
import "./userBookinghistory.css";
var userbookinghistory = require('./DummyUserBookingHistory.json');

export default function UserBookinghistory() {

    let loggedinUser = sessionStorage.getItem("user-info");
    console.log("logged in user in booking history", loggedinUser);
    let id = JSON.parse(loggedinUser).id;
    console.log("logged in user id", id);

    let data = userbookinghistory;
    console.log("data in flight status : ", data);
    const [value, setValue] = useState("Flight");
    //on load of form
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
       
        const result = await axios.get(`http://localhost:8080/userbookinghistory/${id}`);
        // setUser(result.data);
        console.log(result);
    };

    const getSource = (flight) => {
        //return flight.segments[0].departure.iataCode
        return flight.departureCityName;
      }
    
      const getDestination = (flight) => {
       // return flight.segments[flight.segments.length - 1].arrival.iataCode
       return flight.arrivalCityName;
      }
    
      const getStartTime = (flight) => {
        //return flight.segments[0].departure.at;
        return flight.departureDate +" "+ flight.departureTime;
      }
    
      const getEndTime = (flight) => {
       // return flight.segments[flight.segments.length - 1].arrival.at;
       return flight.arrivalDate+" "+flight.arrivalTime;
      }
    
      const getTimings = (flight) => {
        return getStartTime(flight) + " - " + getEndTime(flight);
      }
      // const getDuration = (flight) => {
      //   return getStartTime(flight) - getEndTime(flight);
      // }
      const getDuration = (flight) => {
        let start = new Date(getStartTime(flight)).valueOf();
        let end = new Date(getEndTime(flight)).valueOf();
        var delta = Math.abs(end - start) / 1000;
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        return hours +" hours "+minutes+" minutes";
    
      }
    
      const getPrice = (flight) => {
        return flight.price;
      }

      const getMiles = (flight) => {
        return flight.miles;
      }

      const isValid = () => {
        if (userbookinghistory.hasOwnProperty("flights") && userbookinghistory.flights.length !== 0) {
          return true;
        }
        return false;
      }
    
    return (
        <div className="list-hotel">
          <Card style={{ margin: 10 }}>
                        <CardContent>
                        <div className="row">
                        <center><h1 className="Title">Booking History</h1></center>
                          
                        </div> 
                        </CardContent>
                    </Card>
          <Card style={{ margin: 10 }}>
            <CardContent>
            {
            
            <TabContext value={value}>
           
                <Tabs
                initialSelectedIndex="Flight"
                value={value}
                textColor="primary"
                indicatorColor="primary"
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                >
                <Tab label="Flight" value="Flight"/>
                <Tab label="Hotel" value="Hotel" />
               
                </Tabs>
    
                <div className='col-md-12'>
                    <TabPanel value="Flight">
                    <div className="list-flight">
      {!isValid() ?
        <div>No Flights Found</div> :
        userbookinghistory.flights.map((flight, i) => {
          return (
            <Card style={{ margin: "10px" }} className="card-list" key={i} id={i}>
              <CardContent key={i}>
                <div className="flex-container">
                  <div>
                    <h5 id={i}>{getSource(flight)}</h5>
                    <p>{getStartTime(flight)}</p>
                  </div>
                  <div>
                  <h5>{getDestination(flight)}</h5>
                    <p>{getEndTime(flight)}</p>
                    
                  </div>
                  <div>
                  <h5>{flight.airline}</h5>
                  <p>{getDuration(flight)}</p>
                   
                  </div>
                  <div>
                    <h5>${getPrice(flight)}</h5>
                    <p>{getMiles(flight)} miles</p>
                   
                    

                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
    </div>
                        
                       
                    </TabPanel>
                    <TabPanel value="Hotel">
                   
                    </TabPanel>
                    
                </div>
                
            
            </TabContext>
          }  
              </CardContent>
          </Card>
              
        </div>
      );
    
}
