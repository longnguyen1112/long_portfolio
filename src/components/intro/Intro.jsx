import "./intro.css"
import Me from "../../img/me.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Hoang Long Nguyen</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-items">Student at MSU</div>
                            <div className="i-title-items">Graduate 2022 December</div>
                            <div className="i-title-items">Software Engineer</div>
                            <div className="i-title-items">Back-end Developer</div>
                            <div className="i-title-items">ML and AI Interest</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        My prefer name is Long. I am currently a Computer Science student at MSU. I am aiming to enhance my knowledge in various areas of technology and software/product development. Currently seeking for a job (willing to relocate in the US).
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <button className="i-button">AIChatBot(coming soon)</button>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
