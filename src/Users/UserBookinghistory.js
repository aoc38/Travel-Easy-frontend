import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export default function UserBookinghistory() {

    let loggedinUser = sessionStorage.getItem("user-info");

    console.log("logged in user in booking history", loggedinUser);
    let id = JSON.parse(loggedinUser).id;
    console.log("logged in user id", id);
    //on load of form
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/userbookinghistory/${id}`);
        // setUser(result.data);
        console.log(result);
    };
    return (
        <div>UserBookinghistory</div>
    )
}
