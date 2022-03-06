import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Covid() {
    const navigate = useNavigate();
    const checkRef = useRef();
    const vaccineRef = useRef();

    const[workOption, setWorkOption] = useState('');
    const[covidOption, SetCovidOption] = useState('');
    const[vaccineOption, SetVaccineOption] = useState('');

    const[workError, setWorkError] = useState('')
    const[covidError, setCovidError] = useState('')
    const[vaccineError, setVaccineError] = useState('')

    const handleNext = () => {
        if (workOption !== '' && covidOption !== '' && vaccineOption !== '') {
            navigate("/Insights")
        }
        
        if (workOption === '') {
            setWorkError("Your work preference is required")
        }

        if (covidOption === '') {
            setCovidError("Covid information is required")
        }

        if (vaccineOption === '') {
            setVaccineError("Vaccine information is required")
        }
    }

    return (
        <div className="CovidInfo">
            <section className="form-content">
                <h1>Covid Stuff</h1>
                <form>
                    <div className="question">
                        <p>How would you prefer to work?</p>
                        <div className="radio-item">
                            <input type="radio" id="sairme" name="work" onChange={(e) => setWorkOption(e.target.value)}/>
                            <label htmlFor="sairme">From Sairme Offce</label>
                        </div>

                        <div className="radio-item">
                            <input type="radio" id="home" name="work" onChange={(e) => setWorkOption(e.target.value)} />
                            <label htmlFor="home">From Home</label>
                        </div>

                        <div className="radio-item">
                            <input type="radio" id="hybrid" name="work" onChange={(e) => setWorkOption(e.target.value)} />
                            <label htmlFor="hybrid">Hybrid</label>
                        </div>
                        <h3 className="covidValidation">{ workError }</h3>
                    </div>

                    <div className="question">
                        <p>Did you contract covid 19? :(</p>
                        <div className="radio-item">
                            <input ref={checkRef} type="radio" id="covid-yes" name="covid" onChange={(e) => SetCovidOption(e.target.value)}/>
                            <label htmlFor="covid-yes">Yes</label>
                        </div>

                        <div className="radio-item">
                            <input type="radio" id="covid-no" name="covid" onChange={(e) => SetCovidOption(!e.target.value)}/>
                            <label htmlFor="covid-no">No</label>
                        </div>
                        <h3 className="covidValidation">{ covidError }</h3>
                    </div>

                    {checkRef.current && checkRef.current.checked ? <div className="question">
                        <p>When?</p>
                        <input type="date" />
                        </div> : <div></div>}

                    <div className="question">
                        <p>Have you been vaccinated?</p>
                        <div className="radio-item">
                            <input ref={vaccineRef} type="radio" id="vac-yes" name="vaccine" onChange={(e) => SetVaccineOption(e.target.value)}/>
                            <label htmlFor="vac-yes">Yes</label>
                        </div>

                        <div className="radio-item">
                            <input type="radio" id="vac-no" name="vaccine" onChange={(e) => SetVaccineOption(!e.target.value)}/>
                            <label htmlFor="vac-no">No</label>
                        </div>
                        <h3 className="covidValidation">{ vaccineError }</h3>                 
                    </div>

                    {vaccineRef.current && vaccineRef.current.checked ? <div className="question">
                        <p>When did you get your last covid vaccine?</p>
                        <input type="date" />
                        </div> : <div></div>}
                </form>

                <nav>
                    <button><Link to="/Skills">Prev</Link></button>
                    <button onClick={handleNext}>Next</button>
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
