import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from './Users/AddUser';
import SearchFlight from './Components/Flights/searchflight';
import Flightdetails from './Components/Flights/flightdetails';


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/" element={<SearchFlight />} />
          <Route exact path="/Flightdetails" element={<Flightdetails />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;