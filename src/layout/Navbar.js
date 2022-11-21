import { RateReview } from '@mui/icons-material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Fab } from '@mui/material'
import { Nav, NavDropdown } from 'react-bootstrap'

const styles = {
    position: "fixed",
    bottom: (theme) => theme.spacing(2),
    right: (theme) => theme.spacing(2)
}

export default function Navbar() {

    //getting logged in user from local storage
    let loggedinUser = JSON.parse( localStorage.getItem("user-info"));
    console.warn(loggedinUser);

    let navigate = useNavigate();

   // const history = unstable_HistoryRouter();

    //function for logout
    function logOut(){
        localStorage.clear();
        navigate("/flightsearch");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" >Travel-Easy</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {
                       
                        localStorage.getItem("user-info") ?
                            <>
                                <Link className='btn btn-outline-primary' to="/searchFlight">Flights
                                </Link>
                                <Link className='btn btn-outline-light' to="/hotels">Hotels
                                </Link>
                                <Link className='btn btn-outline-light' to="/searchdeals">Deals
                                </Link>

                            </>
                            :
                            <>
                                <Link className='btn btn-outline-light' to="/searchFlight">Flights
                                </Link>
                                <Link className='btn btn-outline-light' to="/hotels">Hotels
                                </Link>
                                <Link className='btn btn-outline-light' to="/searchdeals">Deals
                                </Link>
                                <Link className='btn btn-outline-light' to="/flightstatus">Flight Status
                                </Link>
                                <Link className='btn btn-outline-light' to="/loginuser">Login
                                </Link>
                                <Link className='btn btn-outline-light' to="/register">Register
                                </Link>
                            </>

                    }


                 

                    {
                    localStorage.getItem("user-info") ?
                     <Nav>
                     <NavDropdown title = {loggedinUser && loggedinUser.firstName}>
                        <NavDropdown.Item onClick = {logOut}>
                            Logout
                        </NavDropdown.Item>

                     </NavDropdown>
                </Nav>
                :null
                    
                }
                   

                </div>
            </nav>

            <div id='bottom'>
                <Link className='btn btn-outline-light' to="/feedbackform"><Fab sx={styles}><RateReview /></Fab></Link>
            </div>
        </div>






    )
}
