import React from 'react';
import '../../index.css';
import './in_landing/Landing.css';
import LoginForm from './in_landing/LoginForm';
import CreateAccountButton from './in_landing/CreateAccountButton';
import ForgotPassword from './in_landing/ForgotPassword';
import LandingEvents from './in_landing/LandingEvents';
import HomeButton from '../../HomeButton';

function Landing() {
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
            </div>
        </div>
    );
};

export default Landing;