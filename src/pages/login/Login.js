import React, { useEffect, useState } from 'react';
import '../../index.css';
import Landing from '../landing/Landing';
import { BaseUrl } from '../../BaseUrl';

function LoggedIn() {
    // this defines variables for json data from backend
    const [neighbors, setNeighbors] = useState();
    
    // this is the main block of code for getting data from backend
    useEffect(() => {
        const url = BaseUrl + 'create_account/';
        fetch(url)
            .then((response) => {
                if(response.status === 500){
                    <Landing />; // need to change to an actual 404 page
                }
                return response.json();
            })
            .then((data) => {
                setNeighbors(data.neighbors);
            });
    }, []);

    // this is frontend code
    return (
        <>
            <h1>Test</h1>
            {neighbors ? neighbors.map((neighbor) => {
                return <p>{neighbor.username}</p>;
            }) : null}
        </>
    );
};

export default LoggedIn;