import React from "react";
import Button from '@mui/material/Button';

function button(props) {
  return (
    <div>
      <Button
      variant="contained"
        onClick={() => (
        props.onSearchFilterList()
        )}
      >
        {props.btname}
      </Button>
    </div>
  );
}

export default button;
