import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from './Users/AddUser';
import SearchFlight from './Components/Flights/Searchflight';
import Flightdetails from './Components/Flights/Flightdetails';
import BookForm from './Components/Flights/bookform';
import EditUser from './Users/EditUser';
import Usermiles from './Components/Flights/Usermiles';
import Bookinghistory from './Components/Flights/bookinghistory';
import React, { useMemo, useState } from 'react';
import Feedback from './Components/Feedback/Feedbackform';
import SearchDeals from './Components/Deals/SearchDeals';
import LoginPage from './Users/LoginPage';
import FlightStatus from './Components/Flights/FlightStatus';
import { UserContext } from './Users/UserContext';
import NavigationHome from './layout/NavigationHome';


function App() {

  const [loggedinUser, SetloggedInUser] = useState(null);
  const userValue = useMemo(() => ({ loggedinUser, SetloggedInUser }), [loggedinUser, SetloggedInUser]);

  return (
    <div className='TRAVEL EASY'>
      <Router>
        
        <UserContext.Provider value={userValue}>
        <NavigationHome />
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/register" element={<AddUser />} />
            <Route exact path="/loginuser" element={<LoginPage />} />
            <Route exact path="/searchFlight" element={<SearchFlight />} />
            <Route exact path="/flightdetails/:id/:pc" element={<Flightdetails />} />
            <Route exact path="/bookform/:id/:pc" element={<BookForm />} />
            <Route exact path="/edituser/:id" element={<EditUser />} />
            <Route exact path="/usermiles/:id/:pc" element={<Usermiles />} />
            <Route exact path="/bookinghistory" element={<Bookinghistory />} />
            <Route exact path="/feedbackform" element={<Feedback />} />
            <Route exact path="/deals" element={<SearchDeals />} />
            <Route exact path="/flightstatus" element={<FlightStatus />} />
          </Routes>
        </UserContext.Provider>


      </Router>


    </div>

  );
}

export default App;