import {React} from 'react';

import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Avatar,
  IconButton
} from '@mui/material';
import { Cancel, AddPhotoAlternate } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import {createTheme, ThemeProvider} from '@mui/material/styles';


import {useFormik} from 'formik';

import validationSchema from  "../../../core/validation"

export default function AddNewEmployee(){
    return <AddUserForm/>;
}

 function AddUserForm() {

const theme = createTheme();
const phoneRegExp = /^((\\+[1-9]{1,9}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const formik = useFormik({
    initialValues: {
      firstName : '',
      lastName : '',
      phone : '',
      email: '',
      password: '',
      confirmPassword:'',
      check:false
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function CustomTextFieldWithLabel(props){
  return    <Box>
            <Typography variant = "subtitle1" >{props.props.label}</Typography>
          <Box sx = {{height : "4px"}}></Box>
            <TextField fullWidth size = "small"  placeholder={props.props.placeholder}></TextField>
          </Box>
}


  function GenderPicker() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
     
      </RadioGroup>
    </FormControl>
  );
}

  return (
   <>
        <Box sx={{ flexGrow: 1, width:"70%" , backgroundColor:"white", padding:"20px", borderRadius: "8px"}}>
      <Grid container spacing={2}>
       <Grid item xs={12}>
         <Typography variant = "h6">Employee Details</Typography>
        </Grid>
     <Grid item xs = {12} direction = "column"   >
        <Typography variant = "subtitle1" >Profile picture</Typography>
      <div style = {{position:"relative" ,width:"100px", marginBottom : "25px", marginTop:"25px"}}>
       
        <Avatar
  alt="Remy Sharp"
  src="https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/avatar/avatar-7.png"
  sx={{ width: 120, height: 120 }}
>
<AddPhotoAlternate sx = {{height:60, width:60}}/>

</Avatar>

,



 <span style = {{position : "absolute" ,top: "-15px",
right: "-20px" }}> <IconButton  ><Cancel sx = {{fontSize:"35px", color:"Red"}}/></IconButton></span> 

</div>

</Grid>
        <Grid item xs={4}>
       <CustomTextFieldWithLabel props = {{label: "First Name"}}/>
        </Grid>
        <Grid item xs={4}>
         <CustomTextFieldWithLabel props = {{label: "Middle Name"}}/>
        </Grid>

           <Grid item xs={4}>
         <CustomTextFieldWithLabel props = {{label: "Last Name"}}/>
        </Grid>
     
           <Grid  item xs={12}>
        <GenderPicker/>
         </Grid>
        <Grid item xs={6}>
          <CustomTextFieldWithLabel props = {{label: "Date of birth",  placeholder: "DD/MM/YYYY"}}/>
        </Grid>

           <Grid item xs={6}>
          <CustomTextFieldWithLabel props = {{label: "Phone Number",  placeholder: "Country code + number"}}/>
        </Grid>
              <Grid item xs={6}>
            <CustomTextFieldWithLabel props = {{label: "Alterntive Phone(Optional)",  placeholder: ""}}/>
        </Grid>

       <Grid item xs={6}>
          <CustomTextFieldWithLabel props = {{label: "Company Email",  placeholder: "example@email.com"}}/>
        </Grid>

               <Grid item xs={6}>
          <CustomTextFieldWithLabel props = {{label: "Personal Email",  placeholder: "example@email.com"}}/>
        </Grid>

         

         

    
      </Grid>
    </Box>
 </>

     



  );
}





