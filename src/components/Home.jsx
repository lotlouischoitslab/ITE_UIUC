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
              </FadeIn>
              
            </div>
      );
  }
}

export default Home;