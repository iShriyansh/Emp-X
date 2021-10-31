import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/home"
import "./app.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return <div ><Topbar />
        <div className="container">
            <Sidebar />
            <Home />
        </div>

    </div>
}
export default App;