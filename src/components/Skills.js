import React, { useState, useEffect } from 'react'
import Next from '../images/Next.png'
import Previous from '../images/Previous.png'
import Ellipse from '../images/Ellipse.png'
import EllipseActive from '../images/EllipseActive.png'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Remove from '../images/Remove.png'

function Skills({ data, setData }) {

    const navigate = useNavigate();

    const[skills, setSkills] = useState([]);
    const[selectedSkills, setSelectedSkills] = useState(''); // where our selected values are stores
    const[selectedValue, setSelectedValue] = useState('');
    
    const[experienceInput, setExperienceInput] = useState('');
    const[errors, setErrors] = useState({
        requirementError: '',
    })

    useEffect(() => {
        axios.get(`https://bootcamp-2022.devtest.ge/api/skills`) // API call for skills
            .then((res) => {
                setSkills(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    const handleSkillSubmit = () => {
        const filteredSkills = skills.filter((element) => { // removing submitted skill from the list
            return element.title !== selectedValue
        })
        setSkills(filteredSkills)
        setSelectedValue('')

        if (selectedValue !== '' && experienceInput !== '') { // adding the selected skill to our selectedSkills state
            setSelectedSkills([...selectedSkills, {
                title: selectedValue,
                experience: experienceInput
            }])
            setErrors({
                requirementError: ''
            })
        }
    }

    const handleDelete = (deleteSkill) => {
        const filteredSkills = selectedSkills.filter((element) => { // version of the skills state that doesn't include our selected skill
            return element.title !== deleteSkill.title
        })

        setSelectedSkills(filteredSkills) // we see set the above filtered state to the main skills state
        setSkills([...skills, {
            id: deleteSkill.id,
            title: deleteSkill.title
        }])
    }

    const handleNext = () => {
        setData({
            ...data,
            skills: selectedSkills // we set our selected skills to the main data state that will later be submitted
        })

        navigate(selectedSkills.length > 0 ? "/Covid" : "") // if we have at least 1 skill, we can move forward

        if (selectedSkills.length === 0) { // throws user an error if they haven't selected a skill
            setErrors({
                requirementError: 'You need to enter at least one skill'
            })
        }
    }

    return (
        <div className="SkillsPage">
            <section className="form-content">
                <h1>Tell us about your skills</h1>

                <form onSubmit={handleSubmit}>
                    <select name="Skills" onChange={(e) => setSelectedValue(e.target.value)} >
                        <option value="">Skills</option>
                        {skills && skills.map((skill) => (
                            <option value={skill.title} key={ skill.id }>{ skill.title }</option>
                        ))}
                    </select>

                    <input type="text" placeholder="Experience Duration in Years" onChange={(e) => setExperienceInput(e.target.value)} />
                    <button type="submit" onClick={() => handleSkillSubmit()}>Add Programming Language</button>
                    <p className="skillValidation">{ errors.requirementError }</p>
                </form>

                <section className="selectedSkills">
                    {selectedSkills && selectedSkills.map((selectedSkill, index) => ( // need key here
                        <div className="skillList" key={index}>
                            <div className="skill-container">
                                <p>{ selectedSkill.title }</p>
                                <p>Years of experience: { selectedSkill.experience }</p>
                                <button className="cancel-button" onClick={() => handleDelete(selectedSkill)}><img src={Remove} /></button>
                            </div>
                        </div>
                    ))}
                </section>

                <nav>
                    <button><Link to="/Personal"><img src={Previous}/></Link></button>
                        <img src={EllipseActive} />
                        <img src={EllipseActive} />
                        <img src={Ellipse} />
                        <img src={Ellipse} />
                        <img src={Ellipse} />
                    <button onClick={handleNext}><img src={Next}/></button>
                </nav>
            </section>

            <section className="form-text">
                <h1>A bit about our battles</h1>

                <p>As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.</p>
            </section>
        </div>
    )
}

export default Skills
