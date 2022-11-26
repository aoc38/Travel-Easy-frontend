import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { FormControl } from "@mui/material";
import BasicTextFields from "../Common/textfield";
import SelectDropdown from "../Common/dropdown";
import DatePickerTravel from "../Common/date-picker";
import { Link } from "react-router-dom";
import "./flight-form.css";
import { useState } from "react";

function Bookform(props) {
  const [cardType, setCardType] = useState([
    {
      label: "Amex",
      id: "lth",
    },
    {
      label: "Visa",
      id: "htl",
    },
    {
      label: "Discover",
      id: "htl",
    },
  ]);
  const [cardList, setCardList] = useState("");

  const onCardTypeChange = (value) => {
    setCardList(value);
  };
  const showSuccessPopup = () => {
    alert("Payment Successful");
  };
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div className="col-md-6">
        <Card style={{ margin: 10 }}>
          <CardContent>
            <FormControl>
              <div className="mt-2">
                <BasicTextFields
                  label="FirstName"
                  id="outlined-basic"
                  variant="outlined"
                />
              </div>
              <div className="mt-2">
                <BasicTextFields className="mt-2" label="LastName" />
              </div>
              <div className="mt-2">
                <BasicTextFields className="mt-2" label="MiddleName" />
              </div>
              <div className="mt-2">
                <SelectDropdown
                  className="mt-2"
                  value={cardType}
                  label="Card Type"
                  onChange={onCardTypeChange}
                />
              </div>
              <div className="mt-2">
                <BasicTextFields className="mt-2" label="Card Number" />
              </div>
              <div className="mt-2">
                <DatePickerTravel className="mt-2" label="Expiration date" />
              </div>
              <div className="mt-2">
                <BasicTextFields
                  label="CVV"
                  variant="outlined"
                  id="outline-basic"
                />
              </div>
              <Link
                className="mt-2 btn btn-primary"
                to="/Bookinghistory"
                onClick={showSuccessPopup}
                label="Continue"
              >
                Continue
              </Link>
              {/* <Link to="/bookform" className="btn btn-primary">Se</Link> */}
            </FormControl>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Bookform;
