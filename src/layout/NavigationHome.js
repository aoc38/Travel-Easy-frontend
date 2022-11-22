import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../Users/UserContext';

export default function NavigationHome() {
    const { loggedinUser, SetloggedInUser } = useContext(UserContext);
    let navigate = useNavigate();
    function logOut() {
        SetloggedInUser(null);
        navigate("/searchFlight");
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
                                    <NavDropdown title={loggedinUser && (JSON.parse(loggedinUser).firstName)}>
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
