import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

    //initial state 
    const [users, setUsers] = useState([]);

    //loading information when page is loaded
    useEffect(() => {
        loadUsers();
    }, []);

    //get users from 
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }
    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Middle</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mailing Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.middleName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mailingAddress}</td>
                                    <td>
                                        <button className='btn btn-primary mx-2'>View</button>
                                        <button className='btn btn-outline-primary mx-2'>Edit</button>
                                        <button className='btn btn-danger mx-2'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
