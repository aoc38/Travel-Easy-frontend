import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavigationHome() {
    // const { loggedinUser, SetloggedInUser } = useContext(UserContext);
    let loggedinUser = JSON.parse(sessionStorage.getItem("user-info"));
    console.log("Logged in user in Navigation bar ", loggedinUser);
    let navigate = useNavigate();

    function logOut() {
        //SetloggedInUser(null);
        sessionStorage.removeItem("user-info");
        sessionStorage.removeItem("flight-data");
        sessionStorage.removeItem("deal-data");
        sessionStorage.removeItem("passenger-count");
        navigate("/searchFlight");
    }

    function bookingHistory() {

        navigate("/userbookinghistory");

    }

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href='/searchFlight'>Travel-Easy</Navbar.Brand>
                    <Nav className="me-auto">
                        {
                            loggedinUser ?
                                <>
                                    <Nav.Link href='/searchFlight'>Flights</Nav.Link>
                                    <Nav.Link href="/hotels">Hotels</Nav.Link>
                                    <Nav.Link href="/deals">Deals</Nav.Link>
                                    <Nav.Link href="/flightstatus">Flight Status</Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link href='/searchFlight'>Flights</Nav.Link>
                                    <Nav.Link href="/hotels">Hotels</Nav.Link>
                                    <Nav.Link href="/deals">Deals</Nav.Link>
                                    <Nav.Link href="/flightstatus">Flight Status</Nav.Link>
                                    <Nav.Link href="/loginuser">Login</Nav.Link>
                                    <Nav.Link href="/register">Register</Nav.Link>
                                </>
                        }
                    </Nav>
                    {
                        loggedinUser ?
                            <Nav>
                                <Navbar.Collapse className="justify-content-end">
                                    <NavDropdown title={loggedinUser && ((loggedinUser).firstName)}>
                                        <NavDropdown.Item onClick={bookingHistory}>
                                            Booking History
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={logOut}>
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Navbar.Collapse>
                            </Nav>
                            : null
                    }
                </Container>
            </Navbar>
        </div>
    )
}
