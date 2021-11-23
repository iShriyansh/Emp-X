import * as yup from 'yup';

const validationSchema = yup.object({
  firstName: yup.string("Df").required("First name is required"),
  lastName : yup.string("FD").required("Last name is required"),
  email: yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
 confirmPassword: yup.string("Confirm password")
     .oneOf([yup.ref('password'), null], 'Passwords must match').required("Confirm password"),
   phone: yup
    .string('Enter your phone number')
    .required()
.matches(/^[0-9]+$/, "Must be only digits")
.min(10, 'Invalid Number')
.max(10, 'Invlaid Number') 


});

export default validationSchema;