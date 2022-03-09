import React, { useState, useEffect } from 'react'
import axios from 'axios'
import downWhite from '../images/downWhite.png'
import upWhite from '../images/upWhite.png'

function Applications() {

    const[applications, setApplications] = useState([]);
    const[visibility, setVisibility] = useState(false);

    useEffect(() => {
        axios.get(`https://bootcamp-2022.devtest.ge/api/applications?token=4ab71abb-226b-4cf2-865a-1c9738efed50`)
            .then((res) => {
                setApplications(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const handleAccordion = (index, e) => {
        if (!visibility) {
            document.getElementsByClassName('applications-list')[index].style.display = "flex"
            document.getElementsByClassName('red-header')[index].style.backgroundColor = "#f05039"
            document.getElementsByClassName('arrowIcon')[index].src = upWhite
            setVisibility(true)
        }
        else {
            document.getElementsByClassName('applications-list')[index].style.display = "none"
            document.getElementsByClassName('red-header')[index].style.backgroundColor = "#fe3b1f"
            document.getElementsByClassName('arrowIcon')[index].src = downWhite
            setVisibility(false)
        }
    }

    return (
        <div className="applications">
            <h1 className="submitted-header">Submitted Applications</h1>
            {applications && applications.map((application, index) => (
                <div className="applications-list-container">
                    <section className="red-header" onClick={() => handleAccordion(index)}>
                        <button onClick={(e) => handleAccordion(index)}><img src={downWhite} className="arrowIcon" /></button>
                    </section>

                    <div className="applications-list">
                    <section className="left-container">
                            <div className="info">
                                <h1>Personal Information</h1>
                                <h3>First Name <span>{ application.first_name }</span></h3>
                                <h3>Last Name <span>{ application.last_name }</span></h3>
                                <h3>E-Mail <span>{ application.email }</span></h3>
                                <h3>Phone <span>{ application.phone }</span></h3>
                            </div>

                            <form>
                            <div className="info">
                                <h1>Covid Situation</h1>
                                <p>How would you prefer to work?</p>
                                <div className="radio-item">
                                    <input checked={application.work_preference === "from_home" ? true : false} type="radio" id="sairme" name="work" value="From Sairme Offce" />
                                    <label htmlFor="sairme">From Sairme Offce</label>
                                </div>

                                <div className="radio-item">
                                    <input checked={application.work_preference === "from_office" ? true : false} type="radio" id="home" name="work" />
                                    <label htmlFor="home">From Home</label>
                                </div>

                                <div className="radio-item">
                                    <input checked={application.work_preference === "hybrid" ? true : false} type="radio" id="hybrid" name="work" />
                                    <label htmlFor="hybrid">Hybrid</label>
                                </div>

                                <p>Did you have covid 19?</p>
                                <div className="radio-item">
                                    <input checked={application.had_covid ? true : false} type="radio" id="covid-yes" name="covid" />
                                    <label htmlFor="covid-yes">Yes</label>
                                </div>

                                <div className="radio-item">
                                    <input checked={!application.had_covid ? true : false}  type="radio" id="covid-no" name="covid" />
                                    <label htmlFor="covid-no">No</label>
                                </div>

                                <div className="dateInput-submission">
                                    <p>When did you have covid 19?</p>
                                    <input value={application.had_covid_at} type="date" />
                                </div>
                                
                                <p>Have you been vaccinated?</p>
                                <div className="radio-item">
                                    <input checked={application.vaccinated ? true : false} type="radio" id="vac-yes" name="vaccine" />
                                    <label htmlFor="vac-yes">Yes</label>
                                </div>

                                <div className="radio-item">
                                    <input checked={!application.vaccinated ? true : false} type="radio" id="vac-no" name="vaccine" />
                                    <label htmlFor="vac-no">No</label>
                                </div>

                                <div className="dateInput-submission">
                                    <p>When did you get your covid vaccine?</p>
                                    <input value={application.vaccinated_at} type="date" />
                                </div>
                            </div>
                            </form>
                    </section>

                    <section className="right-container">
                        <div className="info">
                            <h1>Skillset</h1>
                            {application.skills && application.skills.map((skill) => (
                                <div>
                                    <h3>{skill.id} <span>{skill.experience}</span></h3>
                                </div>
                            ))}
                        </div>

                        <div className="info">
                            <h1>Insights</h1>

                            <p>Would you attend Devtalks and maybe also organize your own?</p>
                            <div className="radio-item">
                                <input checked={application.will_organize_devtalk ? true : false} type="radio" id="dev-yes" name="dev" />
                                <label htmlFor="dev-yes">Yes</label>
                            </div>

                            <div className="radio-item">
                                <input checked={!application.will_organize_devtalk ? true : false} type="radio" id="dev-no" name="dev" />
                                <label htmlFor="dev-no">No</label>
                            </div>

                            <div className="question">
                                <p>What would you speak about at Devtalk?</p>
                                <textarea value={application.devtalk_topic} name="" id="" cols="70" rows="6" placeholder="I would..."></textarea>
                            </div>

                            <div className="question">
                                <p>Tell us something special</p>
                                <textarea value={application.something_special} name="" id="" cols="70" rows="5" placeholder="I..."></textarea>
                            </div>
                        </div>
                    </section>
                </div>
                </div>
            ))}
        </div>
    )
}

export default Applications
