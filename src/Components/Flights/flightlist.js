import React from "react";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import "./flightlist.css";

function FlightList(props) {
  return (
    <div className="list-flight">
      <Card sx={{ maxWidth: 345 }} style={{ margin: 10 }}>
        <CardContent>
          <div className="flex-container">
            <div>
              <h5>Ethihad</h5>
              <p>4:25am - 10:30pm</p>
            </div>
            <div>
              <h5>IAH-CHENNAI</h5>
              <div>1 Stop 20 hr</div>
            </div>
            <div>
              <h5>$2057</h5>
              <Link to="/flightdetails" className="btn btn-primary">Select</Link>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }} style={{ margin: 10 }}>
        <CardContent>
          <div className="flex-container">
            <div>
              <h5>Ethihad</h5>
              <p className="fnt">4:25am - 10:30pm</p>
            </div>
            <div>
              <h5>IAH-CHENNAI</h5>
              <div className="fnt">1 Stop 20 hr</div>
            </div>
            <div>
              <h5>$2057</h5>
              <button>Select</button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default FlightList;
