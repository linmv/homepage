import React from "react"
import "./index.css"
import {motion} from "framer-motion"

function AboutMe() {
    return (
        <div className={"rowStyle"}>
            <div style={{position: "relative"}}>
                <img src={"./images/watercolor_paint_brush.png"} alt={"logo background"} className={"icon-bg"}/>
                <img src={"./images/icon4.png"} alt={"logo"} className={"icon"}/>
            </div>
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