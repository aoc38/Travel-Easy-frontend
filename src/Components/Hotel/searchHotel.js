import React from "react";
import InputSearch from "../Common/searchbar";
import Button from "../Common/button";
import CustomDatePicker from "../Common/date-picker";
import SelectDropdown from "../Common/dropdown";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import "./searchHotel.css";
import { useState } from "react";
import { getNoOfGuest, getNoOfRoom, getFilterStrategies } from './hotel-service';
import Information from "./hotelInformation";
import {getLocation, getHotels} from '../../services/hotel/amadeus-api-service'
import HotelList from "./hotelList";

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
    const [hotels, setHotels] = useState([]);
    

    const [toLocations, setToLocations] = useState([]);
    const [filterBy, setFilterBy] = useState("");
    const [disableButton, setDisableButton] = useState(true);

    const onDestinationSelected = (location) => {
        setDestination(location.iataCode);
        validateForm();
    }

    const handleCheckInDate = (deptDate) => {
      setcheckInDate(deptDate);
      validateForm();
    }
  
    const handleCheckOutDate = (rtDate) => {
      setcheckOutDate(rtDate);
      validateForm();
    }
  
    const handleNumberOfGuest = (event) => {
      setguestsCount(event);
      validateForm();
  
    }

    const handleNumberRoom = (event) => {
      setroomCount(event);
      validateForm();
  
    }

    const onFilterSelected = (type) =>{
        setFilterBy(type);
        fetchHotel();
      }

      const validateForm = () => {
        let buttonVal = disableSearchBtn();
        setDisableButton(buttonVal);
      }

      const disableSearchBtn = () => {
        if(guestsCount && destination !== '' && checkInDate !== '' && checkOutDate !== '') {
          return false;
        }
          return true;
        }

      const canLocationBeSearched = (value, reason) => {
        return value && value.length >=5 && reason !== 'reset';
      }
    
      const searchDestinationLocations = async (event, value, reason) => {
        if(canLocationBeSearched(value, reason)){
          let results = await getLocation(value);
          let data = results.data.data;
          setToLocations(data);
        }
      }

      


    const fetchHotel = async() => {
        let request = {
          'destination': destination,
          'checkInDate': checkInDate,
          'checkOutDate': checkOutDate,
          'guestsCount': guestsCount,
          'roomPrice': roomPrice
          
        }
        let response = await getHotels(request);
        let hotels = response.data;
        setHotels(hotels);
        setShowList(true);
      }

      return (
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-12">
            <div className="d-flex">
            <Card className="mrgn">
            <div className="row">
            <div className="col-md-12">
            <div className="d-flex">
              <div className="p-2 mt-2">
                  <InputSearch
                    value={destination}
                    input={toLocations}
                    onInputChange={searchDestinationLocations}
                    onChange={onDestinationSelected}
                    label="Going to"
                    className="mt-2"
                  />
                </div>
    
                <div className="p-2 mt-2">
                  <CustomDatePicker
                    value={value}
                    onChange={handleCheckInDate}
                    disablePast
                    format={DATE_FORMAT}
                    label="Check-in"
                    className="mt-2"
                  />
                </div>
                <div className="p-2 mt-2">
                    <CustomDatePicker
                      value={value}
                      onChange={handleCheckOutDate}
                      disablePast
                      format={DATE_FORMAT}
                      label="Check-out"
                      className="mt-2"
                    />
                </div>
                <div className="p-2 mt-2">
                  <SelectDropdown
                    label="Travelers"
                    value={noOfGuestList}
                    onChange={handleNumberOfGuest}
                  />
                </div>
                <div className="p-2 mt-2">
              <SelectDropdown
                label="Rooms"
                value={noOfRoomList}
                onChange={handleNumberRoom}
              />
            </div>
            </div>
          </div>
          </div>
            <div className="flt-rt">
            <Button 
            
            disabled={disableButton} 
            onClick={fetchHotel} 
            btname="Search" />
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
            <HotelList hotels={hotels} />  
            </div> : <Information/>}
            </div>
            </div>
          </div>
        </div>
      );
    }

SearchHotel.propTypes = {};
export default SearchHotel;