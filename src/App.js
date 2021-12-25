

import "./app.css"
import ResponsiveDrawer from "./pages/home/main";
import ReactDOM from 'react-dom';
import AdminRegistration from './pages/authentication/admin_registration'
import { Route, Link, BrowserRouter  } from 'react-router-dom' 
import ProtectedRoute from "./components/protected_route";
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return  <BrowserRouter>
  
      <ProtectedRoute exact path="/" component={ResponsiveDrawer} />  
     
      <Route  path="/registration" component={AdminRegistration } />  
     
      </BrowserRouter>;
  
    
}
export default App;