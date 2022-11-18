import { RateReview } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { BottomNavigation, Fab } from '@mui/material'

const styles={ position: "fixed",
bottom: (theme) => theme.spacing(2),
right: (theme) => theme.spacing(2)}

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Travel-Easy</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className='btn btn-outline-light' to ="/">Flights
                    </Link>
                    <Link className='btn btn-outline-light' to ="/hotels">Hotels
                    </Link>
                    <Link className='btn btn-outline-light' to ="/deals">Deals
                    </Link>
                    <Link className='btn btn-outline-light' to ="/adduser">Create Account
                    </Link>
                    <Link className='btn btn-outline-light' to ="/home">Home
                    </Link>

                </div>
              </nav>

            <div id='bottom'>
                <Link className='btn btn-outline-light' to ="/feedbackform"><Fab sx={styles}><RateReview/></Fab></Link>
            </div>
        </div>

      

    


    )
}
