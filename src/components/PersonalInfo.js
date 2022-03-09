import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Previous from '../images/Previous.png'
import Next from '../images/Next.png'
import Ellipse from '../images/Ellipse.png'
import EllipseActive from '../images/EllipseActive.png'

function PersonalInfo({ data, setData }) {

    const navigate = useNavigate();

    const[userInput, setUserInput] = useState({ // creating state for storing variables and errors (for form validation)
        firstError: '',
        lastError: '',
        mailError: '',
        phoneError: ''
    });



    const handleFirst = (e) => { // sets user input to first name property
        setData({
            ...data,
            first_name: e.target.value
        })
    }

    const handleSecond = (e) => { // sets user input to last name property
        setData({
            ...data,
            last_name: e.target.value
        })
    }

    const handleMail = (e) => { // sets user input to email property
        setData({
            ...data,
            email: e.target.value
        })
    }

    const handlePhone = (e) => { // sets user input to phone # property
        setData({
            ...data,
            phone: e.target.value
        })
    }



    const validateForm = (e) => { // Validation
        e.preventDefault()

        if (data.first_name.length < 2) { // first name must be 2 letters long min
            setUserInput({
                ...userInput,
                firstError: '* first name should include 2 or more characters' // if not we display an error
            })
        }

        if (data.last_name.length < 2) {
            setUserInput({
                ...userInput,
                lastError: '* last name should include 2 or more characters'
            })
        }

        if (!data.phone.includes('+995')) { // phone # must include Georgian country code
            setUserInput({
                ...userInput,
                phoneError: '* not a valid Georgian phone number'
            })
        }

        else if (data.first_name.length >= 2 && data.last_name.length >= 2 && data.phone.includes('+995')) { // if the above errors are not detected
            navigate("/Skills") // and we can navigate to the next page
            
        }
    }

    return (
        <div className="PersonalPage">
            <section className="form-content">
                <h1>Hey, Rocketeer, what are your coordinates?</h1>

                <form onSubmit={(e) => validateForm(e)}>
                    <input value={data.first_name} type="text" placeholder="First Name" onChange={(e) => handleFirst(e)} required />
                    <p className="validateError">{ userInput.firstError }</p>

                    <input value={data.last_name}  type="text" placeholder="Last Name" onChange={(e) => handleSecond(e)} required />
                    <p className="validateError">{ userInput.lastError }</p>

                    <input value={data.email} type="email" placeholder="E Mail" required onChange={(e) => handleMail(e)} />
                    <p className="validateError">{ userInput.mailError }</p>

                    <input value={data.phone} type="tel" placeholder="+995 5__ __ __" onChange={(e) => handlePhone(e)} required />
                    <p className="validateError">{ userInput.phoneError }</p>

                    <nav>
                        <button><Link to="/"><img src={Previous}/></Link></button>
                            <img src={EllipseActive} />
                            <img src={Ellipse} />
                            <img src={Ellipse} />
                            <img src={Ellipse} />
                            <img src={Ellipse} />
                        <button type="submit"><img src={Next}/></button> {/* navigates to next page if form is valid */}
                    </nav>
                </form>
            </section>

            <section className="form-text">
                <h1>Redberry Origins</h1>

                <p>You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇</p>
            </section>
        </div>
    )
}

export default PersonalInfo
