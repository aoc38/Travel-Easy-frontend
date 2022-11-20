import React from "react";
import InputSearch from "../Common/searchbar";
import FlightList from "./flightlist";
import Button from "../Common/button";
import "./flight-form.css";
import CustomDatePicker from "../Common/date-picker";
import SelectDropdown from "../Common/dropdown";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./searchflight.css";
import { useState } from "react";
// import SearchFilter from "./searchFilter";
import {
  getNoOfPassengers,
  getFlightBookingTypes,
  getAirports,
  getFlights,
  getFilterStrategies,
} from "./flight-service";
import Information from "./information";

function SearchFlight() {
  const bookingTypes = getFlightBookingTypes();
  const noOfPassengersList = getNoOfPassengers();
  const DATE_FORMAT = "YYYY-MM-DD";
  const [showList, setShowList] = useState(false);
  const [airports, setAirports] = useState(getAirports());
  const [value, setValue] = useState("");
  const [bookReturn, setBookReturn] = useState(false);
  const [bookingType, setBookingType] = useState(bookingTypes[0].id);

  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [noOfPassengers, setNoOfPassengers] = useState(
    getNoOfPassengers()[0].label
  );
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
    setSource(location != null && location.id);

    let buttonVal = disableSearchBtn();
    console.log(`button val = ${buttonVal}`);
    setDisableButton(buttonVal);
  };
  const onDestinationSelected = (location) => {
    setDestination(location != null && location.id);

    let buttonVal = disableSearchBtn();
    console.log(`button val = ${buttonVal}`);
    setDisableButton(buttonVal);
  };

  const handleDepartureDate = (deptDate) => {
    debugger;
    setDepartureDate(deptDate);

    let buttonVal = disableSearchBtn();
    console.log(`button val = ${buttonVal}`);
    setDisableButton(buttonVal);
  };

  const handleReturnDate = (rtDate) => {
    debugger;
    setReturnDate(rtDate);

    let buttonVal = disableSearchBtn();
    console.log(`button val = ${buttonVal}`);
    setDisableButton(buttonVal);
  };

  const handleNumberOfPassengers = (event) => {
    debugger;
    setNoOfPassengers(event);
    let buttonVal = disableSearchBtn();
    console.log(`button val = ${buttonVal}`);
    setDisableButton(buttonVal);
  };

  const fetchFlights = () => {
    let request = {
      source: source,
      destination: destination,
      departureDate: departureDate,
      returnDate: returnDate,
      bookingType: bookingType,
      noOfPassengers: noOfPassengers,
      filterBy: filterBy,
    };
    setFlights(getFlights(request));
    console.log("flight list", getFlights(request));
    setShowList(true);
  };

  const onFilterSelected = (type) => {
    setFilterBy(type);
    fetchFlights();
  };
  const disableSearchBtn = () => {
    debugger;
    console.log("ffffff");
    if (
      noOfPassengersList !== null &&
      source !== "" &&
      destination !== "" &&
      departureDate !== ""
    ) {
      if (bookReturn) {
        return returnDate === "";
      } else {
        return false;
      }
    }

    return true;
  };

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
                      className={`btn ${
                        bookingType === type.id ? "active_btn" : ""
                      }`}
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
                      input={airports}
                      onChange={onSourceSelected}
                      label="Source"
                      className="mt-2"
                    />
                  </div>
                  <div className="p-2 mt-2">
                    <InputSearch
                      value={destination}
                      input={airports}
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
                  <div className="p-2 mt-2">
                    {bookingType === "return" ? (
                      <CustomDatePicker
                        value={value}
                        onChange={handleReturnDate}
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
                btname="Search Flights"
              />
            </div>
          </Card>
        </div>
        <div className="col-md-12 mt-3">
          {showList ? (
            <div>
              {/* <SearchFilter value={getFilterStrategies()} onChange={onFilterSelected}/> */}

              <SelectDropdown
                label="Sort By"
                value={getFilterStrategies()}
                onChange={onFilterSelected}
              />

              <FlightList flights={flights} />
            </div>
          ) : (
            <Information />
          )}
        </div>
      </div>
    </div>
  );
}

SearchFlight.propTypes = {};

export default SearchFlight;
