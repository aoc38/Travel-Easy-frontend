import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {
  return (
    <div>
      <TextField id={props.id} label={props.label} variant={props.variant} />
      </div>
  );
}