import {React} from 'react';

import {
 
  

  Grid,
  Box,
  Typography,

  Avatar,
  IconButton
} from '@mui/material';
import { Cancel, CancelTwoTone,AddPhotoAlternate } from '@mui/icons-material';





import {createTheme, ThemeProvider} from '@mui/material/styles';


import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import validationSchema from  "../../../core/validation"

import TextField from '../../../components/FormsUI/TextField';
import Button from '../../../components/FormsUI/Button';
import Select from '../../../components/FormsUI/Select';
import RadioGroup from '../../../components/FormsUI/RadioGroup';
import { useState,useRef } from 'react';
export default function AddNewEmployee(){
    return <AddUserForm/>;
}



 function AddUserForm() {

const theme = createTheme();
const phoneRegExp = /^((\\+[1-9]{1,9}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;










const INITIAL_FORM_STATE = {
  firstName: "",
  middleName:"",
  lastName:"",
  companyEmail:"",
  dob:"",
  personalEmail:"",
  phone:"",
  phoneAlt:"",
  role:"",
  gender : "",


}

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("required"),
  middleName  : Yup.string().required("required"),
  lastName: Yup.string().required("required"),
  companyEmail: Yup.string().email().required("required"),
  personalEmail: Yup.string().email().required("required"),
  dob: Yup.date().required("required"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
   phoneAlt: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
   role: Yup.string().required("required"),
   gender: Yup.string().required("required")
  });

  const [selectedPic, setSelectedPic] = useState();
 const inputEl = useRef(null);


 const handleFileUpload = (e) => {
     if (e.target.files && e.target.files.length > 0) {
      setSelectedPic(URL.createObjectURL(e.target.files[0]) );
    }
  };


  return (
   <>
        <Box sx={{ flexGrow: 1, width:"80%" , backgroundColor:"white", padding:"20px", borderRadius: "8px"}}>
        <Formik
          initialValues={{
                ...INITIAL_FORM_STATE
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values);
              }}
        
        >
      <Form>
      <Grid container spacing={2}>
  
       <Grid item xs={12}>
         <Typography variant = "h6">Employee Details</Typography>
        </Grid>
     <Grid item xs = {12} direction = "column"   >
        <Typography variant = "subtitle1" >Profile picture</Typography>
      <div style = {{position:"relative" ,width:"100px", marginBottom : "25px", marginTop:"25px"}}>
       
 <input
          ref={inputEl}
          accept="image/png, image/jpeg" 
          type="file"
          onChange={handleFileUpload}
          style={{ display: "none"  }}
          // multiple={false}
        />
      
        <Avatar
       
  alt="Remy Sharp"
  onClick= { ()=>{inputEl.current.click()}}
  src={selectedPic}
  sx={{ width: 120, height: 120,  border: '0.1px solid lightgray' }}
>
<AddPhotoAlternate 

sx = {{height:60, width:60}}/>

</Avatar>



{selectedPic&&  <span style = {{position : "absolute" ,top: "0px",
right: "-28px" }}> <IconButton onClick = {()=> setSelectedPic(null)}  ><Cancel sx = {{fontSize:"25px", color:"Red", backgroundColor:"white" , borderRadius: "50%"}}/></IconButton></span> }

 

</div>

</Grid>
        <Grid item xs={4}>
         <TextField name = "firstName" label = "First Name"/>
        </Grid>
        <Grid item xs={4}>
         <TextField name = "middleName" label = "Middle Name"/>
        </Grid>

           <Grid item xs={4}>
         <TextField name = "lastName" label = "Last Name"/>
        </Grid>
     
           <Grid  item xs={12}>
        <RadioGroup row name = "gender"  label = "Select Gender" options = {["Male", "Female", "Other"]}/>
         </Grid>
        <Grid item xs={6}>
          <TextField name = "dob" label = "Date of Birth"/>
        </Grid>


  <Grid item xs={6}>
          <TextField name = "phone" label = "Phone number"/>
        </Grid>
              <Grid item xs={6}>
            <TextField name = "phoneAlt" label = "Phone number(Alternative)"/>
        </Grid>

       <Grid item xs={6}>
          <TextField name = "companyEmail" label= "Company Email"  placeholder= "example@email.com"    />
        </Grid>

               <Grid item xs={6}>
         <TextField name = "personalEmail" label= "Personal Email"  placeholder= "example@email.com" />
        </Grid>

                  <Grid item xs={6}>
        <Select
                      name="role"
                      label="Employee Role"
                      placeholder = "Select role"
                      options={["Manager", "Employee",  "Admin", "Super Admin"]}
                    />
        </Grid>



         

<Grid container justifyContent="flex-end" sx ={{ml :2, mt:3}}>
     <Button>Add user</Button>
</Grid>
              

      </Grid>
      </Form>
      </Formik>
      <Box sx ={{pb:3}}></Box>
    </Box>
 </>

     



  );
}





