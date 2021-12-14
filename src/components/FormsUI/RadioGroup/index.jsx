import React from 'react';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FormHelperText } from '@mui/material';


import {useFormikContext, useField} from 'formik';



export default function RadioButtonsGroup({
    label,
    name,
    options = [],
    ...otherProps
}) {
   

     const {setFieldValue} = useFormikContext();
     const [field, meta] = useField(name);

   function handleChange(event) {
       const {value} = event.target;
       setFieldValue(name, value);
        console.log(value);
   }


   const configRadioButtonsGroup = {
        ...field,
         
        name: name,
        options: options,
        "aria-label": label,
        ...otherProps,
        
        onChange:handleChange

    }
    if(meta.touched && meta.error) {
        configRadioButtonsGroup.error = meta.error;
    }

    

  return (
    <FormControl component="fieldset" error = {configRadioButtonsGroup.error}>
      <FormLabel component="legend" >Gender</FormLabel>
      <RadioGroup
            {...configRadioButtonsGroup}
      >
    {
        
          options.map((value,index)=> 
                 <FormControlLabel key = {index} value={value} control={<Radio />} label={value} />
           )
       }

    
       
      </RadioGroup>
      <FormHelperText>{configRadioButtonsGroup.helperText}</FormHelperText>
    </FormControl>
  );
}