import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function InputSearch(props) {

  const onChnage = (event, values) => {
    props.onChange(values);     
  }

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.input}
      sx={{ width: 300 }}
      onChange={onChnage}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
}

