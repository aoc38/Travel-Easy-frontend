import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from './Users/AddUser';
import SearchFlight from './Components/Flights/searchflight';
import Flightdetails from './Components/Flights/flightdetails';
import BookForm from './Components/Flights/bookform';
import EditUser from './Users/EditUser';
import Usermiles from './Components/Flights/usermiles';
import Bookinghistory from './Components/Flights/bookinghistory';
import React from 'react';


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
          <Route exact path="/bookform" element={<BookForm />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/usermiles" element={<Usermiles />} />
          <Route exact path="/bookinghistory" element={<Bookinghistory />} />
          
        </Routes>

      </Router>

    </div>
  );
}

export default App;