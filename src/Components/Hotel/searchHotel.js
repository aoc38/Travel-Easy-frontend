import React from "react";
import InputSearch from "../Common/searchbar";
import Button from "../Common/button";
import CustomDatePicker from "../Common/date-picker";
import SelectDropdown from "../Common/dropdown";
import "./searchHotel.css";
import { useState } from "react";
import { getNoOfGuest, getNoOfRoom, getDestination, getFilterStrategies } from './hotel-service';
import Information from "./hotelInformation";
import FlightList from "../Flights/flightlist";

function SearchHotel() {

    const DATE_FORMAT = "YYYY-MM-DD";
    const [showList, setShowList] = useState(false);
    const noOfGuestList = getNoOfGuest();
    const noOfRoomList = getNoOfGuest();
    const [value, setValue] = useState("");

    const [destination, setDestination] = useState("");
    const [checkInDate, setcheckInDate] = useState("");
    const [checkOutDate, setcheckOutDate] = useState("");
    const [guestsCount, setguestsCount] = useState(getNoOfGuest()[0].label);
    const [roomCount, setroomCount] = useState(getNoOfRoom()[0].label);
    const [roomPrice, setroomPrice] = useState("");
    const [city, setCity] = useState(getDestination());
    const [filterBy, setFilterBy] = useState("");

    const onDestinationSelected = (location) => {
        setDestination(location.id);
        
    }

    const onFilterSelected = (type) =>{
        setFilterBy(type);
        fetchHotel();
      }


    const fetchHotel = () => {
        let request = {
          'destination': destination,
          'checkInDate': checkInDate,
          'checkOutDate': checkOutDate,
          'guestsCount': guestsCount,
          'roomPrice': roomPrice
        }

        setCity(getDestination(request))
        setShowList(true);
      };

      return (
        <div>
          <div className="row">
            <div className="col-md-3 border-right ml-4">
              <div>
                <div className="mt-2">
                  <InputSearch
                    input={city}
                    onChange={onDestinationSelected}
                    label="Going to"
                    className="mt-2"
                  />
                </div>
    
                <div className="mt-2">
                  <CustomDatePicker
                    value={value}
                    onChange={setcheckInDate}
                    format={DATE_FORMAT}
                    label="Check-in"
                    className="mt-2"
                  />
                </div>
                <div className="mt-2">
                    <CustomDatePicker
                      value={value}
                      onChange={setcheckOutDate}
                      format={DATE_FORMAT}
                      label="Check-out"
                      className="mt-2"
                    />
                </div>
                <div className="mt-2">
                  <SelectDropdown
                    label="Travelers"
                    value={noOfGuestList}
                    onChange={setguestsCount}
                  />
                </div>
                <div className="mt-2">
              <SelectDropdown
                label="Rooms"
                value={noOfRoomList}
                onChange={setroomCount}
              />
            </div>
                <Button onClick={fetchHotel} className="mt-2" btname="Search Hotel" />
              </div>
            </div>
            <div className="col-md-8 scroll-vertical mt-3">

          {showList ? <div>
            {/* <SearchFilter value={getFilterStrategies()} onChange={onFilterSelected}/> */}
            <SelectDropdown
                label="Sort By"
                value={getFilterStrategies()}
                onChange={onFilterSelected}
              />

            <FlightList flights={city} />
          </div> : <Information/>}
        </div>
            
          </div>
        </div>
      );
    }

SearchHotel.propTypes = {};
export default SearchHotel;