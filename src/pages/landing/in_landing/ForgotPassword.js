import React from 'react';
import '../../../index.css';
import './Landing.css';

function ForgotPassword() {
    return (
        <form align="right">
            <button type="submit" className="buttonless_button" style={{ color:"red" }}><p>Forgot password?</p></button>
            <br />
            <br />
        </form>
    );
};

export default ForgotPassword;