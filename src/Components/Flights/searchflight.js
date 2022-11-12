import React from "react";
import InputSearch from "../Common/searchbar";
import FlightList from "./flightlist";
import Button from "../Common/button";
import "./flight-form.css";
import CustomDatePicker from "../Common/date-picker";
import SelectDropdown from "../Common/dropdown";
import "./searchflight.css";
import { useState } from "react";
import SearchFilter from "./searchFilter";
import { getNoOfPassengers, getFlightBookingTypes, getAirports, getFlights } from './flight-service';
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
  const [noOfPassengers, setNoOfPassengers] = useState(getNoOfPassengers()[0].label);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [flights, setFlights] = useState([])

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
    setSource(location.id);
  }
  const onDestinationSelected = (location) => {
    setDestination(location.id);
  }

  const onSearch = () => {
    let request = {
      'source': source,
      'destination': destination,
      'departureDate': departureDate,
      'returnDate': returnDate,
      'bookingType': bookingType,
      'noOfPassengers': noOfPassengers
    }
    setFlights(getFlights())
    setShowList(true);
  };


  return (
    <div>
      <div className="row">
        <div className="col-md-3 border-right ml-4">
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
          <div>
            <div className="mt-2">
              <InputSearch
                input={airports}
                onChange={onSourceSelected}
                label="Source"
                className="mt-2" />
            </div>
            <div className="mt-2">
              <InputSearch
                input={airports}
                onChange={onDestinationSelected}
                label="Destination"
                className="mt-2"
              />
            </div>

            <div className="mt-2">
              <CustomDatePicker
                value={value}
                onChange={setDepartureDate}
                format={DATE_FORMAT}
                label="Departure Date"
                className="mt-2"
              />
            </div>
            <div className="mt-2">
              {bookingType === "return" ? (
                <CustomDatePicker
                  value={value}
                  onChange={setReturnDate}
                  format={DATE_FORMAT}
                  label="Return Date"
                  className="mt-2"
                />
              ) : null}
            </div>
            <div className="mt-2">
              <SelectDropdown
                label="No of travellers"
                value={noOfPassengersList}
                onChange={setNoOfPassengers}
              />
            </div>
            <Button onClick={onSearch} btname="Search Flights" />
          </div>
        </div>
        <div className="col-md-8 scroll-vertical mt-3">

          {showList ? <div>
            <SearchFilter />
            <FlightList flights={flights} />
          </div> : <Information/>}
        </div>
      </div>
    </div>
  );
}

SearchFlight.propTypes = {};

export default SearchFlight;
