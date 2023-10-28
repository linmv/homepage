import React from "react"
import "./index.css"
import {motion} from "framer-motion"

function AboutMe() {
    return (
        <div className={"rowStyle"}>
            <img src={"./images/icon_bg.png"} alt={"avatar"} style={{maxWidth: "300px", width: "auto"}}/>
            <div>
                <h3 className={`text-center`}>About Me</h3>
                <p className={`text-center`}> Hello and welcome to my world. I am Michelle, I am currently
                    developing more skills to become a web app developer, especially on front-end. I am quiet but
                    positive. I envision my dream job as a perfect blend of creativity, innovation, and
                    problem-solving, allowing me to continuously learn and grow professionally.</p>
            </div>
        </div>
    );
}

export default AboutMe;