import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./flight-form.css";
import { getFlightById } from "./flight-service";

function Bookform() {
  //getting logged in user from local storage
  let loggedinUser = JSON.parse(sessionStorage.getItem("user-info"));
  console.log("logged in user in book form", loggedinUser);
  const userData = loggedinUser;
  let userid = userData.id;

  //getting params from url
  const { id } = useParams();
  console.log("data in Flight details page: ", id);
  let data = getFlightById(id);
  let flight = data.length === 1 ? data[0] : {};

  flight.price = pc * flight.price;
  flight.miles = pc * flight.miles;
  console.log("flight details in book form : ", flight);

  const [card, setCard] = useState({});
  const { cardNumber, cardOwnerName, cvv, expiryDate, cardType } = card;

  const [bookingData, setBookingData] = useState({
    flightData: flight,
    passengerData: passengerlist,
  });

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...passengerlist];
    list[index][name] = value;

    setBookingData({
      ...bookingData,
      ...{ passengerData: { ...bookingData.passengerData, list } },
    });
  };

  //on load of form
  useEffect(() => {
    loadUser();
    // refreshBookingData();
  }, []);
  // function refreshBookingData(){
  //   setBookingData(...bookingData.passengerData,passengerlist);

  // }

  const loadUser = async () => {
    //const result = await axios.get(`http://localhost:8080/user/${id}`);
    // console.log("logged in user card info : ",userData.cards.filter((obj) => obj.default === true));
    setCard(userData.cards.filter((obj) => obj.default === true)[0]);
  };

  const onCardInputChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };
  const showSuccessPopup = async (e) => {
    e.preventDefault();
    try {
      //call flight booking api and send flight object data along with user data
      console.log(bookingData);
      //pc=0 bookdeals
      //pc>0 bookflight
      let response = await axios.post(
        `http://localhost:8080/bookdeals/${userid}`,
        bookingData
      );
      console.log("response in book flight ", response);
      // let response = await axios.post("http://localhost:8080/usersignup", userData  );
      // console.log(response.data);
      // console.warn(response.data);
      // localStorage.setItem("user-info", JSON.stringify(response.data));
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <div>
            {" "}
            <h5> Card Information </h5>
          </div>
          <label htmlFor="cardOwnerName" className="form-label">
            Name on Card{" "}
          </label>
          <input
            type={"text"}
            className="form-control"
            placeholder="Enter name on the credit card"
            name="cardOwnerName"
            disabled
            value={cardOwnerName}
            onChange={(e) => onCardInputChange(e)}
          />

          <div className="add-space"></div>
          <div className="row">
            <div class="col s12 m6">
              <label htmlFor="cardNumber" className="form-label">
                Card Number{" "}
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter credit card number"
                name="cardNumber"
                disabled
                value={cardNumber}
                onChange={(e) => onCardInputChange(e)}
              />
            </div>
            <div class="col s12 m6">
              <label htmlFor="cardType" className="form-label">
                Card Type
              </label>
              <select
                value={cardType}
                className="form-control"
                disabled
                name="cardType"
                onChange={(e) => onCardInputChange(e)}
              >
                <option value="VISA">VISA</option>
                <option value="MASTERCARD">MASTER CARD</option>
              </select>
            </div>
          </div>

          <div className="add-space"></div>
          <div className="row">
            <div class="col s12 m6">
              <label htmlFor="expiryDate" className="form-label">
                Expiry Date{" "}
              </label>
              <input
                type={"month"}
                className="form-control"
                placeholder="Enter credit card expiry in mm/yy format"
                name="expiryDate"
                value={expiryDate}
                disabled
                onChange={(e) => onCardInputChange(e)}
              />
            </div>
            <div class="col s12 m6">
              <label htmlFor="cvv" className="form-label">
                CVV{" "}
              </label>
              <input
                type={"number"}
                minLength={3}
                maxLength="3"
                className="form-control"
                placeholder="Enter cvv"
                name="cvv"
                value={cvv}
                disabled
                onChange={(e) => onCardInputChange(e)}
              />
            </div>
          </div>
          <div className="add-space"></div>
          <div className="text-center">
            {" "}
            <Link
              className="mt-2 btn  btn btn-outline-primary"
              to="/Bookinghistory"
              onClick={showSuccessPopup}
              label="Continue"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookform;
