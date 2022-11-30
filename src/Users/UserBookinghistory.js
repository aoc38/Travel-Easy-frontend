import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function UserBookinghistory() {

    let loggedinUser = sessionStorage.getItem("user-info");

    console.log("logged in user in booking history", loggedinUser);
    let id = JSON.parse(loggedinUser).id;
    console.log("logged in user id", id);


    const [userHistory, setUserHistory] = useState({
        deals: [],
        flights:[],
        hotels:[]
    });

    //on load of form
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/userbookinghistory/${id}`);
        // setUser(result.data);
        console.log(result.data);
        setUserHistory(result.data);
    };
    return (
        <div>
            UserData
        </div>
    )
}
