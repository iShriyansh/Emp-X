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
  Container
} from '@mui/material';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import { useHistory } from "react-router-dom";
import Logo from '../../core/logo';
import {useFormik} from 'formik';
import signup from '../../repository/auth/signup';



import validationSchema from  "../../core/validation"
import { setUser } from '../../core/user';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '} {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
const phoneRegExp = /^((\\+[1-9]{1,9}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default function SignUp() {

  const history = useHistory();
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
      console.log(values);
    
      signup(values,
         (response) => {
          alert(response);
          setUser(response);
          history.push('/');
          //setting data in local storage
       
       
         } ,
          (error) => {
              alert(error);
          });
      
    },
  });

  return (
    <ThemeProvider theme={theme}>

      {/* <BasicAppbar/> */}

      <Container maxWidth="xs" m="2">

        <Box
          sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems :'center',
        
        }}>
        {/* //? setting margin for gap */}
                <Box sx={{
            m: 4
          }}/>
          <Logo />
      
          <Grid container direction="row" alignItems="start">
            <Typography
              component="h5"
              variant="h5"
              sx
              ={{
              fontWeight: "bold",
              color: "#424349"
            }}>

              Create an account!
            </Typography>
          </Grid>
        
          <form
            
     
            onSubmit={formik.handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  size="small"
                  label="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                    inputProps = {{
                    maxLength: 50,
                    minLength: 2,
                    type: 'text',
               
                    title: "Enter valid name"
                  }
                  }
                  autoFocus/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  size="small"
                  label="Last Name"
                  name="lastName"
                      value={formik.values.lastName}
                  onChange={formik.handleChange}
                     error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                    inputProps = {{
                    maxLength: 50,
                    minLength: 2,
                    type: 'text',
               
                    title: "Enter valid name"
                  }}
                  autoComplete="family-name"/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  size="small"
                  type = "email"
                  value={formik.values.email }
                  onChange={formik.handleChange}
                   error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  autoComplete="email"/>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  value={formik.values.phone }
                  onChange={formik.handleChange}
                     error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  autoComplete="phone"
                  size="small"
                 inputProps = {{
                    maxLength: 10,
                    minLength: 10,
                   
                   
                    title: "Enter a valid phone number"
                  }}

                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  size="small"
                  type="password"
                  id="password"
              value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
                  autoComplete="new-password"/>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  size="small"
                  id="confirmPassword"
                  value={ formik.values.confirmPassword}
                  onChange={formik.handleChange}
                      error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                  />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={< Checkbox 
                color = "primary" name = "check" 
               checked={formik.values.check}
  onChange={() => formik.setFieldValue('check', !formik.values.check)}
                 />}
                  label="I agree to privacy policy and terms & conditions"/>
              </Grid>
            </Grid>
            <Button
              fullWidth
              size='large'
              variant="outlined"
             
              disabled = {!formik.values.check}
               type='submit'
              sx={{
              mt: 3,
              mb: 2,
                

            }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item sx = {{mb:8}}>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
       
       
        </Box>

      </Container>
    </ThemeProvider>
  );
}





