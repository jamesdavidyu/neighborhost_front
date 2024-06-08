import React from 'react';
import './index.css';
import logo from './neighborhost_logo.png';

function HomeButton() {
    return (
        <form>
            <button type="submit" class="buttonless_button">
                <img src={logo} alt="neighborhost.com" className="logo" />
                <br />
                <br />
            </button>
        </form>
    );
};

export default HomeButton;