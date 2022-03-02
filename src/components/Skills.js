import React from 'react'
import { Link } from 'react-router-dom'

function Skills() {
    return (
        <div className="SkillsPage">
            <section className="form-content">
                <h1>Tell us about your skills</h1>

                <form>
                    <select name="Skills" placeholder="Skills">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>

                    <input type="text" placeholder="Experience Duration in Years" />
                    <button>Add Programming Language</button>
                </form>

                <nav>
                    <button><Link to="/Personal">Prev</Link></button>
                    <button><Link to="/Covid">Next</Link></button>
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
