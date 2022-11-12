import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

function Usermiles(props) {
  return (
    <div>
      <Card style={{ margin: 10 }}>
        <CardContent>
          <div>User Miles info</div>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="User Miles"
            />
          </FormGroup>
          <Link to="/BookForm" className='btn btn-primary'>Checkout</Link>
        </CardContent>
      </Card>
    </div>
  );
}

export default Usermiles;
