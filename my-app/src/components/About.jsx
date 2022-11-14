import React from 'react'
import './css/About.css'

class About extends React.Component {
    render() {
        return(
            <div name="about" id ="about" className="about">
                <div className="about-title">
                    ABOUT US
                </div>
                <div className="about">
                    <div className="about-subtitle">
                        ITE Mission Statement:
                    </div>
                    <div className="about-bio">
                        
                        "To provide the global community of transportation professionals 
                        with the knowledge, practices, skills, and connections to serve the 
                        needs of their communities and help shape the future of the profession 
                        and transportation in the societal context."
                    </div>
                </div>
            </div>
        );
    }
}

export default About;