import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Next from '../images/Next.png'
import Previous from '../images/Previous.png'
import Ellipse from '../images/Ellipse.png'
import EllipseActive from '../images/EllipseActive.png'

function Insights({ data, setData }) {

    const navigate = useNavigate();
    
    const checkRef = useRef();
    const devRef = useRef();

    const[firstInput, setFirstInput] = useState();

    const[firstError, setFirstError] = useState('') 
    const[secondError, setSecondError] = useState('')
    const[thirdError, setThirdError] = useState('')


    const handleNext = () => {
        if (firstInput !== '' && data.something_special !== '') {

            setData({
                ...data,
                will_organize_devtalk: checkRef.current.checked ? true : false,
                devtalk_topic: checkRef.current.checked ? devRef.current.value : "Not applicable"
            })

            if (checkRef.current.checked) {
                if (data.devtalk_topic !== '') {
                    navigate("/Submit")
                }
        }
            else {
                navigate("/Submit")
            }
    }

        if (firstInput === '') {
            setFirstError('This field is required')
        }

        if (checkRef.current.checked && data.devtalk_topic === '') {
            setSecondError('This field is required too, buddy...')
        }

        if (data.something_special === '') {
            setThirdError("You're done...")
        }
    }
    

    return (
        <div className="CovidInfo">
            <section className="form-content">
                <h1>What about you?</h1>

                <form>
                    <div className="question">
                        <p>Would you attend Devtalks and maybe also organize your own?</p>
                        <div className="radio-item">
                            <input ref={checkRef} type="radio" id="dev-yes" name="dev" onChange={(e) => setFirstInput(e.target.value)} />
                            <label htmlFor="dev-yes">Yes</label>
                        </div>

                        <div className="radio-item">
                            <input type="radio" id="dev-no" name="dev" onChange={(e) => setFirstInput(!e.target.value)} />
                            <label htmlFor="dev-no">No</label>
                        </div>
                            <h3 className="covidValidation">{ firstError }</h3>
                    </div>

                    {checkRef.current && checkRef.current.checked ? <div className="question">
                        <p>What would you speak about at Devtalk?</p>
                        <textarea ref={devRef} value={data.devtalk_topic} onChange={(e) => setData({...data, devtalk_topic: e.target.value})} name="" id="" cols="70" rows="6" placeholder="I would..."></textarea>
                        <h3 className="covidValidation">{ secondError }</h3>
                    </div> : <div></div>}

                    <div className="question">
                        <p>Tell us something special</p>
                        <textarea value={data.something_special} onChange={(e) => setData({...data, something_special: e.target.value})} name="" id="" cols="70" rows="5" placeholder="I..."></textarea>
                        <h3 className="covidValidation">{ thirdError }</h3>
                    </div>
                </form>

                <nav>
                    <button><Link to="/Covid"><img src={Previous}/></Link></button>
                        <img src={EllipseActive} />
                        <img src={EllipseActive} />
                        <img src={EllipseActive} />
                        <img src={EllipseActive} />
                        <img src={Ellipse} />
                    <button onClick={handleNext}><img src={Next}/></button>
                </nav>
            </section>

            <section className="form-text">
                <h1>Redberrian Insights</h1>

                <p>We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!</p>
            </section>
        </div>
    )
}

export default Insights
