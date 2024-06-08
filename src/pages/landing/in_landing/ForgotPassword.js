import React from 'react';
import '../../../index.css';
import './Landing.css';

function ForgotPassword() {
    return (
        <form align="right">
            <input type="submit" className="buttonless_button" style={{ color:"red" }} value="Forgot password?"/>
            <br />
            <br />
        </form>
    );
};

export default ForgotPassword;