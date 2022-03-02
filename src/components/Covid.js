import React from 'react'
import { Link } from 'react-router-dom'

function Covid() {
    return (
        <div className="CovidInfo">
            <section className="form-content">
                <h1>Covid Stuff</h1>
                <form>
                    <div className="question">
                        <p>How would you prefer to work?</p>
                        <div className="radio-item">
                            <input type="radio" id="sairme" name="work" />
                            <label htmlFor="sairme">From Sairme Offce</label>
                        </div>

                        <div className="radio-item">
                            <input type="radio" id="home" name="work" />
                            <label htmlFor="home">From Home</label>
                        </div>

                        <div className="radio-item">
                            <input type="radio" id="hybrid" name="work" />
                            <label htmlFor="hybrid">Hybrid</label>
                        </div>
                    </div>

                    <div className="question">
                        <p>Did you contract covid 19? :(</p>
                        <div className="radio-item">
                            <input type="radio" id="covid-yes" name="covid" />
                            <label htmlFor="covid-yes">Yes</label>
                        </div>

                        <div className="radio-item">
                            <input type="radio" id="covid-no" name="covid" />
                            <label htmlFor="covid-no">No</label>
                        </div>
                    </div>

                    <div className="question">
                        <p>When?</p>
                        <input type="date" />
                    </div>

                    <div className="question">
                        <p>Have you been vaccinated?</p>
                        <div className="radio-item">
                            <input type="radio" id="vac-yes" name="vaccine" />
                            <label htmlFor="vac-yes">Yes</label>
                        </div>

                        <div className="radio-item">
                            <input type="radio" id="vac-no" name="vaccine" />
                            <label htmlFor="vac-no">No</label>
                        </div>                        
                    </div>

                    <div className="question">
                        <p>When did you get your last covid vaccine?</p>
                            <input type="date" />
                    </div>
                </form>

                <nav>
                    <button><Link to="/Skills">Prev</Link></button>
                    <button><Link to="/Insights">Next</Link></button>
                </nav>
            </section>

            <section className="form-text">
                <h1>Redberry Covid Policies</h1>

                <p>As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications {'>'} Zoom meetings. Both on the fun and productivity scales.</p>
            </section>
        </div>
    )
}

export default Covid
