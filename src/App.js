import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import SearchDeals from './Components/Deals/SearchDeals';
import Feedback from './Components/Feedback/Feedbackform';
import BookForm from './Components/Flights/bookform';
import Bookinghistory from './Components/Flights/bookinghistory';
import Flightdetails from './Components/Flights/flightdetails';
import FlightStatus from './Components/Flights/FlightStatus';
import SearchFlight from './Components/Flights/searchflight';
import Usermiles from './Components/Flights/Usermiles';
import NavigationHome from './layout/NavigationHome';
import Home from './pages/Home';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';

import SearchDeal from './Components/Deals/SearchDeals';
import LoginPage from './Users/LoginPage';
import Dealsdetails from './Components/Deals/Dealsdetails';
import FeedbackSuccess from './Components/Feedback/FeedbackSuccess';
import SearchHotel from './Components/Hotel/searchHotel';
import Hoteldetails from './Components/Hotel/hoteldetails';
import Navbar from './layout/Navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/register" element={<AddUser />} />
          <Route exact path="/loginuser" element={<LoginPage />} />
          <Route exact path="/searchFlight" element={<SearchFlight />} />
          <Route exact path="/flightdetails/:id/:pc" element={<Flightdetails />} />
          <Route exact path="/dealsdetails/:id" element={<Dealsdetails />} />
          <Route exact path="/bookform" element={<BookForm />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/usermiles/:id" element={<Usermiles />} />
          <Route exact path="/bookinghistory" element={<Bookinghistory />} />
          <Route exact path="/feedbackform" element={<Feedback />} />
          <Route exact path="/SearchDeals" element={<SearchDeal />} />
          <Route exact path="/flightstatus" element={<FlightStatus />} />
          <Route exact path="/feedbacksuccess" element={<FeedbackSuccess />} />
          <Route exact path="/hotels" element={<SearchHotel />} />
          <Route exact path="/hoteldetails/:id" element={<Hoteldetails />} />
        </Routes>
        </Router>
{/*
  //to store the current user
  // const [loggedinUser, SetloggedInUser] = useState(null);
  // const value = useMemo(() => ({ loggedinUser, SetloggedInUser }), [loggedinUser, SetloggedInUser]);

  */}

    </div>

  );
}

export default App;