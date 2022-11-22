import React from 'react'
import axios from 'axios';
import Card from '../Common/Card';
import InputSearch from "../Common/searchbar";
import CustomDatePicker from "../Common/date-picker";
import { useState } from "react";
import { getAirports } from './flight-service';
import Button from "../Common/button";
import { getLocations } from '../../services/flight/amadeus-api-service'


export default function FlightStatus() {
  const DATE_FORMAT = "YYYY-MM-DD";
  const [source, setSource] = useState("");
  const [fromLocations, setFromLocations] = useState([]);
  const [destination, setDestination] = useState("");
  //const [airports, setAirports] = useState(getAirportsForFlightStatus());
  const [value, setValue] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [disableButton, setDisableButton] = useState(true);


  const onSourceSelected = (location) => {
   setSource(location != null && location.id);
      setSource();
    let buttonVal = disableSearchBtn();
    console.log(`button val = ${buttonVal}`);
    setDisableButton(buttonVal);
  }
  const onDestinationSelected = (location) => {
    setDestination(location != null && location.id);

    let buttonVal = disableSearchBtn();
    console.log(`button val = ${buttonVal}`);
    setDisableButton(buttonVal);
  }
  const handleDepartureDate = (deptDate) => {
    debugger;
    setDepartureDate(deptDate);

    let buttonVal = disableSearchBtn();
    console.log(`button val = ${buttonVal}`);
    setDisableButton(buttonVal);
  }

  const disableSearchBtn = () => {
    debugger;
    console.log("search button");
    if(source !== '' && destination !== '' && departureDate !== '') {
      return false;
    }
    return true;
  }

  const canLocationBeSearched = (value, reason) => {
    return value && value.length >= 3 && reason != 'reset';
  }

  const searchSourceLocations = async (event, value, reason) => {
    if (canLocationBeSearched(value, reason)) {
      let results = await getLocations(value);
      let data = results.data.data;
      setFromLocations(data);
    }
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Card className="mrgn">
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex">
                    <div className="p-2 mt-2">
                      <InputSearch
                        value={source}
                        input={fromLocations}
                        onChange={onSourceSelected}
                        onInputChange={searchSourceLocations}
                        label="Source"
                        className="mt-2" />
                    </div>
                    <div className="p-2 mt-2">
                      <InputSearch
                        value={destination}
                        //input={airports}
                        onChange={onDestinationSelected}
                        label="Destination"
                        className="mt-2"
                      />
                    </div>

                    <div className="p-2 mt-2">
                      <CustomDatePicker
                        value={value}
                        onChange={handleDepartureDate}
                        format={DATE_FORMAT}
                        label="Departure"
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            <div className="flt-rt">
              <Button
                disabled={disableButton}
                // onClick={fetchFlightStatus} 
                btname="Search" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
