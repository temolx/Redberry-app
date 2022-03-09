import React from 'react'
import rocketman from '../images/rocketman.png'
import { Link } from 'react-router-dom'
import starsVideo from '../images/starsVideo.mp4'

function LandingPage() {
    return (
        <div className="landing-container">
            <div className="landing-text">
                <h1>Welcome Rocketeer !</h1>

                <div className="landing-buttons">
                    <button className="start-button"><Link to="/Personal">Start Questionnaire</Link></button>
                    <button className="submitted-button"><Link to="/Applications">Submitted Applications</Link></button>
                </div>
                
                <img src={rocketman} alt="image of an astronaut" className="rocketMan" />
            </div>

            <video autoPlay muted loop className="bgVideo">
                <source src={starsVideo}  type="video/mp4" />
            </video>
        </div>
    )
}

export default LandingPage
