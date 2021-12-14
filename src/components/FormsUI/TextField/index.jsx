import React from 'react'
import {Box,Typography, TextField} from '@mui/material'
import { useField } from 'formik'

export default function TextFieldWrapper({
  name,
  label,
  ...otherProps
}) {
  
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    size : 'small',
    variant: 'outlined',
  }
  
  if(meta.touched && meta.error){
    configTextField.error = true
    configTextField.helperText = meta.error
  }
  
  return (
        <div>
              <Box>
            <Typography variant = "subtitle1" >{label}</Typography>
          <Box sx = {{height : "4px"}}></Box>
            <TextField {...configTextField}
         
               ></TextField>
          </Box>
        </div>
    )
}
