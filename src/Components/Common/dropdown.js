import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectDropdown(props) {
 

  return (
    <Box sx={{ width: 302 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.passengers}
          label={props.label}
          onChange={props.onPassengersChange}
        >
          <MenuItem value={10}>{props.passengers}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
