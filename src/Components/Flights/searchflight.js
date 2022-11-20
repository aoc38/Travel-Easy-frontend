import React from "react";
import InputSearch from "../Common/searchbar";
import FlightList from "./flightlist";
import Button from "../Common/button";
import "./flight-form.css";
import CustomDatePicker from "../Common/date-picker";
import SelectDropdown from "../Common/dropdown";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import "./searchflight.css";
import { useState } from "react";
// import SearchFilter from "./searchFilter";
import { getNoOfPassengers, getFlightBookingTypes, getAirports, getFilterStrategies } from './flight-service';
import Information from "./information";
import {getLocations, getFlights} from '../../services/flight/amadeus-api-service'


function SearchFlight() {
  const bookingTypes = getFlightBookingTypes();
  const noOfPassengersList = getNoOfPassengers();
  const DATE_FORMAT = "YYYY-MM-DD";
  const [showList, setShowList] = useState(false);
  // const [airports, setAirports] = useState([]);
  const [fromLocations, setFromLocations] = useState([]);
  const [toLocations, setToLocations] = useState([]);
  const [value, setValue] = useState("");
  const [bookReturn, setBookReturn] = useState(false);
  const [bookingType, setBookingType] = useState(bookingTypes[0].id);


  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [noOfPassengers, setNoOfPassengers] = useState(getNoOfPassengers()[0].label);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [flights, setFlights] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  const handleBookType = (id) => {
    setBookingType(id);
    switch (id) {
      case "oneWay":
        setBookReturn(false);
        setReturnDate("");
        break;
      case "return":
        setBookReturn(true);
        break;
    }
  };

  const onSourceSelected = (location) => {
    setSource(location);
    validateForm();
  }
  const onDestinationSelected = (location) => {
    setDestination(location);
    validateForm();
  }

  const handleDepartureDate = (deptDate) => {
    setDepartureDate(deptDate);
    validateForm();
  }

  const handleReturnDate = (rtDate) => {
    setReturnDate(rtDate);
    validateForm();
  }

  const handleNumberOfPassengers = (event) => {
    setNoOfPassengers(event);
    validateForm();

  }

  const fetchFlights = async() => {
    let request = {
      'source': source,
      'destination': destination,
      'departureDate': departureDate,
      'returnDate': returnDate,
      'bookingType': bookingType,
      'noOfPassengers': noOfPassengers,
      'filterBy' : filterBy
    }
    let response = await getFlights(request);
    console.log(response);
    let flights = response.data;
    setFlights(flights);
    setShowList(true);
  };

  const onFilterSelected = (type) =>{
    setFilterBy(type);
    fetchFlights();
  }

  const validateForm = () => {
    let buttonVal = disableSearchBtn();
    setDisableButton(buttonVal);
  }

  const disableSearchBtn = () => {
    if(noOfPassengers && source !== '' && destination !== '' && departureDate !== '') {
      if (bookReturn) {
        return returnDate === '';
      } else {
        return false;
      }
    }

    return true;
  }

  const canLocationBeSearched = (value, reason) => {
    return value && value.length >=5 && reason != 'reset';
  }

  const searchSourceLocations = async (event, value, reason) => {
    if(canLocationBeSearched(value, reason)){
      let results = await getLocations(value);
      let data = results.data.data;
      setFromLocations(data);
    }
  }

  const searchDestinationLocations = async (event, value, reason) => {
    if(canLocationBeSearched(value, reason)){
      let results = await getLocations(value);
      let data = results.data.data;
      setToLocations(data);
    }
  }

  // const disableButton = source == null || destination == null || returnDate == null || departureDate == null;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
        <Card className="mrgn">
        {/* <div className="col-md-3 ml-4"> */}
          <div className="col-md-3 mrgn">
          <div className="btn-group d-flex justify-content-center">
            {bookingTypes.map((type) => {
              return (
                <button
                  type="button"
                  className={`btn ${bookingType === type.id ? "active_btn" : ""}`}
                  key={type.id}
                  onClick={() => handleBookType(type.id)}
                >
                  {type.name}
                </button>
              );
            })}
          </div>
          </div>
          <div className="row">
          <div className="col-md-12">
          <div className="d-flex">
            <div className="p-2 mt-2">
              <InputSearch
                value={source}
                input={fromLocations}
                onInputChange={searchSourceLocations}
                onChange={onSourceSelected}
                label="Source"
                className="mt-2" />
            </div>
            <div className="p-2 mt-2">
              <InputSearch
                value={destination}
                input={toLocations}
                onInputChange={searchDestinationLocations}
                onChange={onDestinationSelected}
                label="Destination"
                className="mt-2"
              />
            </div>

            <div className="p-2 mt-2">
              <CustomDatePicker
                value={value}
                onChange={handleDepartureDate}
                disablePast
                format={DATE_FORMAT}
                label="Departure"
                className="mt-2"
              />
            </div>
            <div className="p-2 mt-2">
              {bookingType === "return" ? (
                <CustomDatePicker
                  value={value}
                  onChange={handleReturnDate}
                  disablePast
                  format={DATE_FORMAT}
                  label="Return"
                  className="mt-2"
                />
              ) : null}
            </div>
            <div className="p-2 mt-2">
              <SelectDropdown
                label="No of travellers"
                value={noOfPassengersList}
                onChange={handleNumberOfPassengers}
              />
            </div>
          </div>
          </div>
          </div>
        {/* </div> */}
        <div className="flt-rt">
            <Button 
            
            disabled={disableButton} 
            onClick={fetchFlights} 
            btname="Search Flights" />
            </div>
        </Card>
        </div>
        <div className="col-md-12 mt-3">

          {showList ? <div>
            {/* <SearchFilter value={getFilterStrategies()} onChange={onFilterSelected}/> */}
            
            <SelectDropdown
                label="Sort By"
                value={getFilterStrategies()}
                onChange={onFilterSelected}
              />

            <FlightList flights={flights} />
          </div> : <Information/>}
        </div>
      </div>
    </div>
  );
}

SearchFlight.propTypes = {};

export default SearchFlight;
