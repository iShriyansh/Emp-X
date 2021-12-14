import * as React from 'react';
import Box from '@mui/material/Box';
import {InputLabel, Typography, TextField} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useField, useFormikContext } from 'formik';

export default function SelectWrapper({
name,
options,
label,
...otherProps

}) {
  const {setFieldValue} = useFormikContext();
   const [field, meta] = useField(name);

  const handleChange = (event) => {
   const {value} = event.target;
   setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
      
    onchange: handleChange,
  }

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      
  <Typography variant = "subtitle1" >Employee Role</Typography>
          <Box sx = {{height : "4px"}}></Box>
       
           <TextField {...configSelect} >
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {options[item]}
          </MenuItem>
        )
      })}
    </TextField>
        
    </Box>
  );
}