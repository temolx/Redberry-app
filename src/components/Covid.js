import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Next from '../images/Next.png'
import Previous from '../images/Previous.png'
import Ellipse from '../images/Ellipse.png'
import EllipseActive from '../images/EllipseActive.png'

function Covid({ data, setData }) {
    const navigate = useNavigate();

    const workRef = useRef();
    const workRefTwo = useRef();
    const covidRef = useRef();
    const vaccineRef = useRef();

    const[workOption, setWorkOption] = useState('');
    const[covidOption, SetCovidOption] = useState('');
    const[vaccineOption, SetVaccineOption] = useState('');

    const[covidDate, setCovidDate] = useState('');
    const[vaccineDate, setVaccineDate] = useState('');

    const[workError, setWorkError] = useState('') // could make a state object for errors here 
    const[covidError, setCovidError] = useState('')
    const[vaccineError, setVaccineError] = useState('')
    const[dateErrorCovid, setDateErrorCovid] = useState('')
    const[dateErrorVaccine, setDateErrorVaccine] = useState('')

    const handleNext = () => {
        if (workOption !== '' && covidOption !== '' && vaccineOption !== '') {
            
            setData({
                ...data,
                work_preference: workRef.current.checked ? "from_home" : workRefTwo.current.checked ? "from_office" : "hybrid",
                had_covid: covidRef.current.checked ? true : false,
                had_covid_at: "2022-02-23",
                vaccinated: vaccineRef.current.checked ? true : false,
                vaccinated_at: "2022-02-23",
            })

            if (covidRef.current.checked && vaccineRef.current.checked) {
                if (covidDate !== '' && vaccineDate !== '') {
                    navigate("/Insights")
                }   
            }

            else if (covidRef.current.checked && !vaccineRef.current.checked) {
                if (covidDate !== '') {
                    navigate("/Insights")
                }   
            }

            else if (!covidRef.current.checked && vaccineRef.current.checked) {
                if (vaccineDate !== '') {
                    navigate("/Insights")
                }   
            }
            
            else {
                navigate("/Insights")
            }
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

        if (dateErrorCovid === '') {
            setDateErrorCovid("Date required")
        }

        if (dateErrorVaccine === '') {
            setDateErrorVaccine("Date required")
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
                            <input ref={workRef} type="radio" id="sairme" name="work" value="From Sairme Offce" onChange={() => setWorkOption(workRef.current.value)}/>
                            <label htmlFor="sairme">From Sairme Offce</label>
                        </div>

                        <div className="radio-item">
                            <input ref={workRefTwo} type="radio" id="home" name="work" onChange={(e) => setWorkOption(e.target.value)} />
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
                            <input ref={covidRef} type="radio" id="covid-yes" name="covid" onChange={(e) => SetCovidOption(e.target.value)}/>
                            <label htmlFor="covid-yes">Yes</label>
                        </div>

                        <div className="radio-item">
                            <input type="radio" id="covid-no" name="covid" onChange={(e) => SetCovidOption(!e.target.value)}/>
                            <label htmlFor="covid-no">No</label>
                        </div>
                        <h3 className="covidValidation">{ covidError }</h3>
                    </div>

                    {covidRef.current && covidRef.current.checked ? <div className="question">
                        <p>When?</p>
                        <input type="date" onChange={(e) => setCovidDate(e.target.value)} />
                        <h3 className="covidValidation">{ dateErrorCovid }</h3>
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
                        <input type="date" onChange={(e) => setVaccineDate(e.target.value)} />
                        <h3 className="covidValidation">{ dateErrorVaccine }</h3>
                        </div> : <div></div>}
                </form>

                <nav>
                    <button><Link to="/Skills"><img src={Previous}/></Link></button>
                        <img src={EllipseActive} />
                        <img src={EllipseActive} />
                        <img src={EllipseActive} />
                        <img src={Ellipse} />
                        <img src={Ellipse} />
                    <button onClick={handleNext}><img src={Next}/></button>
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