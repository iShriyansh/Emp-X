import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import App from './App';
import AdminRegistration from './pages/authentication/admin_registration'
import AddNewEmployee from './pages/home/manage_employee/AddNewEmployee';

ReactDOM.render(
<Router>
  <Route exact path="/" component={App} />  
   <Route exact path="/registration" component={AdminRegistration} />  

</Router>,
  document.getElementById('root')
);

