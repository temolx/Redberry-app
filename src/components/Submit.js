import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Submit() {

    const[submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
        console.log(submitted)
    }

    if (!handleSubmit) {
        return (
            <div className="message">
                <h1 className="sign-off">Thanks for Joining 😊</h1>
            </div>
        )
    }

    else {
        return (
            <div className="submit-container">
                <button className="submitButton" onClick={handleSubmit}>Submit</button>
                <button className="backButton"><Link to="/Insights">go back</Link></button>
            </div>
        )
    }
}

export default Submit
