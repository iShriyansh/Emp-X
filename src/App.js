import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/home"
import "./app.css"
import ResponsiveDrawer from "./pages/home/main";
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return <div >
    
    {/* <Topbar />
        <div className="container">
            <Sidebar />
            <Home />

           
        </div> */}

         <ResponsiveDrawer></ResponsiveDrawer>

    </div>
}
export default App;