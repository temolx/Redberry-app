import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Submit({ data, setData }) {

    const navigate = useNavigate();

    const[submitted, setSubmitted] = useState(false);
    const[redirect, setRedirect] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
        console.log(data)

        axios.post("https://bootcamp-2022.devtest.ge/api/application", { // posting into the API
            token: data.token,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone: data.phone,

            skills: data.skills,

            work_preference: data.work_preference,
            had_covid: data.had_covid,
            had_covid_at: data.had_covid_at,
            vaccinated: data.vaccinated,
            vaccinated_at: data.vaccinated_at,

            will_organize_devtalk: data.will_organize_devtalk,
            devtalk_topic: data.devtalk_topic,
            something_special: data.something_special
        }, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        setTimeout(() => { // redirect states becomes true after 3 secs and we navigate to the landing page once again
            setRedirect(true)
        }, 3000)
    }, [submitted])

    if (submitted) {
            return (
                <div className="message">
                    {!redirect ? <h1 className="sign-off">Thanks for Joining 😊</h1> : navigate("/")}
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
