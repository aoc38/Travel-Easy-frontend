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

function SearchFlight() {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       showList: false,
  //       passengers: [1, 2, 3, 4, 5],
  //       filterDropdownItems: [{ label: "Price", name: "" }],
  //     };
  //   }
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
  const [selectedNoOfTravellers, setSelectedNoOfTravellers] = useState('')
  


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
          {!showList ? <FlightList /> : ""}
        </div>
      </div>
    </div>
  );
}

SearchFlight.propTypes = {};

export default SearchFlight;
