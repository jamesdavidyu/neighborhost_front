import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../index.css';
import { BaseUrl } from '../../BaseUrl';
import { LoginContext } from '../../App';

function LoggedIn() {
    const [loggedIn, setLoggedIn] = useContext(LoginContext);
    // this defines variables for json data from backend
    const [neighbors, setNeighbors] = useState();

    const navigate = useNavigate();
    const location = useLocation();
    
    // this is the main block of code for getting data from backend
    useEffect(() => {
        const url = BaseUrl + 'api/login/';
        fetch(url, {
            // GET is default so no need to define method
            headers: {
                'Content-Type' : 'application/json',
                Authorization : 'Bearer ' + localStorage.getItem('access') // needs the space after Bearer - copy this in other login pages
            },
        })
            .then((response) => {
                if(response.status === 401){
                    setLoggedIn(false);
                    navigate('/', {
                        state: {
                            previousUrl: location.pathname,
                        }
                    }); // need to change to an actual 404 page
                }
                return response.json();
            })
            .then((data) => {
                setNeighbors(data.neighbors);
            });
    }, []);

    const logOut = () => {
        setLoggedIn(false);
        localStorage.clear()
        navigate('/')
    };

    // this is frontend code
    return (
        <>
            <form onClick={logOut}>
                <button 
                    type="submit" 
                    className="button_format"
                >
                    Log Out
                </button>
            </form>
            {neighbors ? neighbors.map((neighbor) => {
                return <p>{neighbor.zipcode}</p>;
            }) : null}
        </>
    );
};

export default LoggedIn;