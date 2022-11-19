import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function InputSearch(props) {

  const onChange = (event, values) => {
    props.onChange(values);
  }

  const handleAutocompleteTextChange = (event) => {
    if (event.target.value && event.target.value.length > 3) {
      props.onInputChange(this.state.query);
    }
  }

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.input}
      onInputChange={props.onInputChange}
      getOptionLabel={option => option.name}
      sx={{ width: 300 }}
      onChange={onChange}
      // renderInput={(params) => <TextField {...params} label={props.name}  />}
      renderInput={params => <TextField {...params} label={props.label} variant="outlined" onChange={handleAutocompleteTextChange} />}

    />
  );
}

