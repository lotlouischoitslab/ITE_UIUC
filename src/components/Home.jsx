import React from 'react'
import './css/Home.css'
import Back from '../assets/its.jpg';
import FadeIn from 'react-fade-in'

class Home extends React.Component {
  render() {
      return (
          <div name = 'home' id='homepage'className="homepage">
              <FadeIn delay={1000}>
                <span className="title">
                    ITE@ILLINOIS
                </span>
                <span className="sub-title">
                    University of Illinois at Urbana-Champaign Chapter
                </span>
                <span className="sub-title">
                    ITE Mission Statement:
                </span>
                <span className="sub-title">
                "To provide the global community of transportation professionals 
                with the knowledge, practices, skills, and connections to serve the 
                needs of their communities and help shape the future of the profession and transportation in the societal context."
                </span>
                
              </FadeIn>
              
            </div>
      );
  }
}

export default Home;