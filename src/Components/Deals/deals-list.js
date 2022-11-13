import React from "react";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import "./flightlist.css";

function Dealslist(props) {
  return (
    <div className="list-flight">
      <div>
    
      </div>
      <Card sx={{ maxWidth: 345 }} style={{ margin: 10 }}>
        <CardContent>
          <div className="flex-container">
            <div>
              <h5>FROM</h5>
            </div>
            <div>
              <h5>TO</h5>
            </div>
            <div>
              <h5>TIME PERIOD</h5>
            </div>
            <div>
              <h5>ROUND TRIP FARE</h5>
            </div>
            <div>
              <h5>ROUND TRIP FARE USING MILES</h5>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }} style={{ margin: 10 }}>
        <CardContent>
          <div className="flex-container">
            <div>
              <h5>Dallas, TX</h5>
              <p className="fnt">DFW</p>
            </div>
            <div>
              <h5>New York, NY</h5>
              <div className="fnt">NYC</div>
            </div>
            <div>
              <h5> Jan 13 - Jan 25, 2023</h5>
            </div>
            <div>
                <h5>$146</h5>
                <button>Select</button>
            </div>
            <div>
                <h5>12000 miles + $11.56</h5>
                <button>Select</button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }} style={{ margin: 10 }}>
        <CardContent>
          <div className="flex-container">
            <div>
              <h5>Dallas, TX</h5>
              <p className="fnt">DFW</p>
            </div>
            <div>
              <h5>Los Angeles, CA</h5>
              <div className="fnt">LAX</div>
            </div>
            <div>
              <h5> Jan 14 - Jan 22, 2023</h5>
            </div>
            <div>
                <h5>$163</h5>
                <button>Select</button>
            </div>
            <div>
                <h5>11000 miles + $11.20</h5>
                <button>Select</button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }} style={{ margin: 10 }}>
        <CardContent>
          <div className="flex-container">
            <div>
              <h5>Dallas, TX</h5>
              <p className="fnt">DFW</p>
            </div>
            <div>
              <h5>Los Angeles, CA</h5>
              <div className="fnt">LAX</div>
            </div>
            <div>
              <h5> Jan 14 - Jan 22, 2023</h5>
            </div>
            <div>
                <h5>$163</h5>
                <button>Select</button>
            </div>
            <div>
                <h5>11000 miles + $11.20</h5>
                <button>Select</button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default FlightList;
