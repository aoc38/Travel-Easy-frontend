import React from 'react';
// import Card from '../Common/Card';
import { useState } from "react";
import CustomDatePicker from "../Common/date-picker";
// import Button from "../Common/button";
import { Card } from '@mui/material';
import Button from "../Common/button";
import BasicTextFields from "../Common/textfield";
// import InputSearch from "../Common/searchbar";
// import CustomDatePicker from "../Common/date-picker";
import { getLocations } from '../../services/flight/amadeus-api-service';
import FlightStatusList from './FlightStatusList';
import Information from "./information";
var flightStatusJsonData = require('../DummyDataFiles/FlightsDummy/FS.json');



export default function FlightStatus() {
  const DATE_FORMAT = "YYYY-MM-DD";
  const [source, setSource] = useState("");
  const [fromLocations, setFromLocations] = useState([]);
  const [toLocations, setToLocations] = useState([]);
  const [destination, setDestination] = useState("");
  const [value, setValue] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [showList, setShowList] = useState(false);
  const [flightStatus, setFlightStatus] = useState({
  })


  const onSourceSelected = (location) => {
    //setSource(location != null && location.id);
    setSource(location.name);
    let buttonVal = disableSearchBtn();
    console.log(`button val = ${buttonVal}`);
    setDisableButton(buttonVal);
  }
  const onDestinationSelected = (location) => {
    // setDestination(location != null && location.id);
    setDestination(location.name);
    let buttonVal = disableSearchBtn();
    console.log(`button val = ${buttonVal}`);
    setDisableButton(buttonVal);
  }
  const handleDepartureDate = (deptDate) => {
    setDepartureDate(deptDate);

    let buttonVal = disableSearchBtn();
    console.log(`button val = ${buttonVal}`);
    setDisableButton(buttonVal);
  }

  const disableSearchBtn = () => {
    // debugger;
    console.log("search button");
    if (source !== '' && destination !== '' && departureDate !== '') {
      return false;
    }
    return true;
  }

  const canLocationBeSearched = (value, reason) => {
    return value && value.length >= 3 && reason !== 'reset';
  }

  const searchSourceLocations = async (event, value, reason) => {
    if (canLocationBeSearched(value, reason)) {
      let results = await getLocations(value);
      let data = results.data.data;
      setFromLocations(data);
    }
  }
  const searchDestinationLocations = async (event, value, reason) => {
    if (canLocationBeSearched(value, reason)) {
      let results = await getLocations(value);
      let data = results.data.data;
      setToLocations(data);
    }
  }

  const fetchFlightStatus = async () => {
    let request = {
      'source': source,
      'destination': destination,
      'departureDate': departureDate
    }
    let data = flightStatusJsonData;
    console.log("data in flight status : ", data);
    data = data.data.filter((obj) =>
      obj.departureCityName === request.source
      && obj.arrivalCityName === request.destination
      && obj.departureDate === request.departureDate);
    console.log("data per request flight status : ", data);
    // let response = await getFlightStatusReq(request);
    // console.log("response from 108 in search flight : ",response);
    // let flights = response.data;
    // setFlight(flights);
    setFlightStatus(data[0]);
    setShowList(true);
  }


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Card className="mrgn-flight-status">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex justify-content-center">
                  <div className="p-2 mt-2">
                    <BasicTextFields
                      label="Flight Number"
                      variant="outlined"
                      id="outline-basic"
                    />
                  </div>
                  <div className="p-2 mt-2">
                    <BasicTextFields
                      label="Airline Name"
                      variant="outlined"
                      id="outline-basic"
                    />
                  </div>

                  {/* <div className="p-2 mt-2">
                    <InputSearch
                      value={destination}
                      input={toLocations}
                      onChange={onDestinationSelected}
                      onInputChange={searchDestinationLocations}
                      label="Destination"
                      className="mt-2"
                    />
                  </div> */}

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
              <div className='col-md-12'>
                <div className="p-2 mt-2 text-center">
                  <Button
                    disabled={disableButton}
                    onClick={fetchFlightStatus}
                    btname="Search" />
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-md-12 mt-3">
          {showList ? <div>
            <FlightStatusList fsdata={flightStatus} />
          </div> : <Information />}
        </div>
      </div>
    </div>
  );
}
