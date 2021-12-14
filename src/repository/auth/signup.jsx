import React from 'react';
import axios from 'axios';

const baseURL = 'http://172.20.10.4:4000/user/signup';

 export default function Signup(user) {
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
   
   
}).catch((error) => {
    console.log("error");
    console.log(error);
  
});
}