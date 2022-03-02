import React from 'react'
import { Link } from 'react-router-dom'

function Insights() {
    return (
        <div className="CovidInfo">
            <section className="form-content">
                <h1>What about you?</h1>

                <form>
                    <div className="question">
                        <p>Would you attend Devtalks and maybe also organize your own?</p>
                        <div className="radio-item">
                            <input type="radio" id="dev-yes" name="dev" />
                            <label htmlFor="dev-yes">Yes</label>
                        </div>

                        <div className="radio-item">
                            <input type="radio" id="dev-no" name="dev" />
                            <label htmlFor="dev-no">No</label>
                        </div>
                    </div>

                    <div className="question">
                        <p>What would you speak about at Devtalk?</p>
                        <textarea name="" id="" cols="70" rows="6" placeholder="I would..."></textarea>
                    </div>

                    <div className="question">
                        <p>Tell us something special</p>
                        <textarea name="" id="" cols="70" rows="5" placeholder="I..."></textarea>
                    </div>
                </form>

                <nav>
                    <button><Link to="/Covid">Prev</Link></button>
                    <button><Link to="/Submit">Next</Link></button>
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
