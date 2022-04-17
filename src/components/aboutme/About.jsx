import React from 'react'
import "./about.css"
import MeAbout from "../../img/about1.jpg"
import JS from "../../img/js.jpg"
import ML from "../../img/ml.jpg"
import CLOUD from "../../img/cloud.jpg"
import BBALL from "../../img/bball.jpg"
import GYM from "../../img/gym.jpg"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={MeAbout} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About me</h1>
            <p className="a-desc">
                I am <b>ambitious and driven</b>. I thrive on challenge and always listen to feedback to improve myself. I am not comfortable with settling, and I am always eager to learn and looking for any opportunity that I can grow and deepen my understanding in CS field. I am also interested in <b>Machine Learning/AI</b> Algorithm which will make our worlds more convenient. Beside programming, I also love going to the gym, lifting and basketball.
            </p>
            <p className="a-exp">
                 I am currently working on campus. I am a <b>tutor, teaching assistant and lab teaching assistant</b> for Math and Computer Science class. Additionally, I am working and assistant on a <b>research</b> that is going to be published <b>(North Dakota SIR Model of COVID-19)</b>. 
            </p>
            <div className="a-example">
                <img src={JS} alt="" className="a-example-img" />
                <img src={ML} alt="" className="a-example-img" />
                <img src={CLOUD} alt="" className="a-example-img" />
                <img src={BBALL} alt="" className="a-example-img" />
                <img src={GYM} alt="" className="a-example-img" />
            </div>
        </div>
    </div>
  )
}

export default About