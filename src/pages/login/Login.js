import React, { useEffect, useState } from 'react';
import '../../index.css';

function LoggedIn() {
    // this defines variables for json data from backend
    const [neighbors, setNeighbors] = useState();
    
    // this is the main block of code for getting data from backend
    useEffect(() => {
        console.log('Fetching...');
        fetch('http://localhost:8000/create_account/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
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