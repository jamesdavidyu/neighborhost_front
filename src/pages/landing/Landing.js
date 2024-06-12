import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../index.css';
import './in_landing/Landing.css';
import LoginForm from './in_landing/LoginForm';
import CreateAccountButton from './in_landing/CreateAccountButton';
import ForgotPassword from './in_landing/ForgotPassword';
import LandingEvents from './in_landing/LandingEvents';
import HomeButton from '../../HomeButton';
import { BaseUrl } from '../../BaseUrl';
import { LoginContext } from '../../App';

function Landing() {
    const [loggedIn, setLoggedIn] = useContext(LoginContext);
    // const [landing, setLanding] = useState();
    const [neighbors, setNeighbors] = useState();

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if(loggedIn === true){
            const url = BaseUrl + 'api/login/'; // need API to respond with event data also
            fetch(url, {
                headers: {
                    'Content-Type' : 'application/json',
                    Authorization : 'Bearer ' + localStorage.getItem('access')
                },
            })
            .then((response) => {
                if(response.status === 200){
                    navigate('/login')
                } else if(response.status === 401){
                    setLoggedIn(false);
                    navigate('/', {
                        state: {
                            previousUrl: location.pathname,
                        }
                    }); // can I do a separate fetch in here to get landing data?
                }
                return response.json();
            })
            .then((data) => {
                setNeighbors(data.neighbors); // this still sends data to Login.js, interesting
            });    
        } // else if fetch from api/events return landing data
    }, []);

    return (
        <div className="quarter_container">
            <div className="quarter_columnize left_column">
                <HomeButton />
                <LoginForm />
                <ForgotPassword />
                <CreateAccountButton />
            </div>
            <div className="quarter_columnize right_column">
                <LandingEvents />
                {/* {landing ? landing.map((land) => {
                    return <p>{land.neighborhood}</p>;
                }) : null} */}
            </div>
        </div>
    );
};

export default Landing;