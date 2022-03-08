import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Previous from '../images/Previous.png'
import Next from '../images/Next.png'
import Ellipse from '../images/Ellipse.png'
import EllipseActive from '../images/EllipseActive.png'

function PersonalInfo({ data, setData }) {

    const navigate = useNavigate();

    const[userInput, setUserInput] = useState({ // creating state for storing variables and errors (for form validation)
        firstName: '',
        lastName: '',
        mail: '',
        phoneNumber: '',

        firstError: '',
        lastError: '',
        mailError: '',
        phoneError: ''
    });
    const[isValid, setIsValid] = useState(false); // keeps track of validation status



    const handleFirst = (e) => { // sets user input to first name property
        setUserInput({
            ...userInput,
            firstName: e.target.value
        })
    }

    const handleSecond = (e) => { // sets user input to last name property
        setUserInput({
            ...userInput,
            lastName: e.target.value
        })
    }

    const handleMail = (e) => { // sets user input to email property
        setUserInput({
            ...userInput,
            mail: e.target.value
        })
    }

    const handlePhone = (e) => { // sets user input to phone # property
        setUserInput({
            ...userInput,
            phoneNumber: e.target.value
        })
    }



    const validateForm = (e) => { // Validation
        e.preventDefault()

        if (userInput.firstName.length < 2) { // first name must be 2 letters long min
            setUserInput({
                ...userInput,
                firstError: '* first name should include 2 or more characters' // if not we display an error
            })
        }

        if (userInput.lastName.length < 2) {
            setUserInput({
                ...userInput,
                lastError: '* last name should include 2 or more characters'
            })
        }

        if (!userInput.phoneNumber.includes('+995')) { // phone # must include Georgian country code
            setUserInput({
                ...userInput,
                phoneError: '* not a valid Georgian phone number'
            })
        }

        else if (userInput.firstName.length >= 2 && userInput.lastName.length >= 2 && userInput.phoneNumber.includes('+995')) { // if the above errors are not detected
            setIsValid(true) // then our form is valid
            setData({
                ...data,
                first_name: userInput.firstName,
                last_name: userInput.lastName,
                email: userInput.mail,
                phone: userInput.phoneNumber,
            })
            navigate("/Skills") // and we can navigate to the next page
            
        }
    }

    return (
        <div className="PersonalPage">
            <section className="form-content">
                <h1>Hey, Rocketeer, what are your coordinates?</h1>

                <form onSubmit={(e) => validateForm(e)}>
                    <input type="text" placeholder="First Name" onChange={(e) => handleFirst(e)} required />
                    <p className="validateError">{ userInput.firstError }</p>

                    <input type="text" placeholder="Last Name" onChange={(e) => handleSecond(e)} required />
                    <p className="validateError">{ userInput.lastError }</p>

                    <input type="email" placeholder="E Mail" required onChange={(e) => handleMail(e)} />
                    <p className="validateError">{ userInput.mailError }</p>

                    <input type="tel" placeholder="+995 5__ __ __" onChange={(e) => handlePhone(e)} required />
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
