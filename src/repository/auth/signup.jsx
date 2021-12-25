import React from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:4000/user/signup';

 export default function Signup(user, successCallback, errorCallBack) {
   const {firstName, lastName, email, password, phone} = user;
 const body = {
	firstName: firstName,
	lastName: lastName,
	email: email,
	phone:phone,
	password: password
	
}
   
  
    axios.post(baseURL, body,   {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    }
  }  ).then((response) => {
    console.log(response);
    successCallback(response.data);
   
}).catch((error) => {
    console.log("error");
    console.log(error);
    errorCallBack(error);
  
});



}