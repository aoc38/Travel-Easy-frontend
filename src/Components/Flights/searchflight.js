import React from "react";
import PropTypes from "prop-types";
// import FlightForm from "./flight-form";
import SearchInput from "../Common/searchbar";
import FlightList from "./flightlist";
import Button from "../Common/button";
import "./flight-form.css";
import DatePickerTravel from "../Common/date-picker";
import SelectDropdown from "../Common/dropdown";
import "./searchflight.css";
import { useState } from "react";
import SearchFilter from "./searchFilter";

function SearchFlight() {
  const [showList, setShowList] = useState(false);
  const [source, setSource] = useState([
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    { label: "Monty Python and the Holy Grail", year: 1975 },
  ]);
  const [value, setValue] = useState("");
  const [travellers, setTravellers] = useState([
    { label: 1 },
    { label: 2 },
    { label: 3 },
    { label: 4 },
    { label: 5 },
  ]);
  const [selectedNoOfTravellers, setSelectedNoOfTravellers] = useState("");
  const [bookReturn, setBookReturn] = useState(false);
  const [btnType, setbtnType] = useState("oneWay");
  const [returnDate, setReturnDate] = useState("");
  const bookType = [
    {
      name: "One way",
      id: "oneWay",
    },
    {
      name: "Return",
      id: "return",
    },
  ];
  const handleBookType = (id) => {
    setbtnType(id);
    if (id === "oneWay") {
      setBookReturn(false);
      setReturnDate("");
    } else if (id === "return") {
      setBookReturn(true);
    }
  };

  const onSearch = () => {
    setShowList(true);
  };

  

  //   const onPassengersChange = (event) => {
  //     // setTravellers(event.target.value);

  //   };
  const onPassengersChange = (value) => {
    setSelectedNoOfTravellers(value);
  };

  return (
    <div>
      <div className="row">
        {/* <div className="col-md-3 border-right ml-4"><FlightForm onSearchFilterList={this.onSearch}  onPassengersChange={this.handleChange}/></div> */}
        {/* <div className="btn-group d-flex justify-content-center">
                    
                  </div> */}
        <div className="col-md-3 border-right ml-4">
          <div className="btn-group d-flex justify-content-center">
            {bookType.map((type) => {
              return (
                <button
                  type="button"
                  className={`btn ${btnType === type.id ? "active_btn" : ""}`}
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
              <SearchInput input={source} label="Source" className="mt-2" />
            </div>
            <div className="mt-2">
              <SearchInput
                input={source}
                label="Destination"
                className="mt-2"
              />
            </div>
            
            <div className="mt-2">
              <DatePickerTravel
                value={value}
                label="Departure Date"
                className="mt-2"
              />
            </div>
            <div className="mt-2">
            {btnType === "return" ? (
                    <DatePickerTravel
                    value={value}
                    label="Return Date"
                    className="mt-2"
                  />
                  ) : null}
            </div>
            <div className="mt-2">
              <SelectDropdown
                label="No of travellers"
                value={travellers}
                onChange={onPassengersChange}
              />
            </div>
            <Button onClick={onSearch} btname="Search Flights" />
          </div>
        </div>
        <div className="col-md-8 scroll-vertical mt-3">
        <SearchFilter />
          {!showList ? <FlightList /> : ""}
        </div>
      </div>
    </div>
  );
}

SearchFlight.propTypes = {};

export default SearchFlight;
