import React from "react"
import "./index.css"
import {motion} from "framer-motion"

function AboutMe() {
    return (
        <div className={"rowStyle"}>
            <img src={"./images/icon_bg.png"} alt={"avatar"} style={{maxWidth: "300px", width: "auto"}}/>
            <div>
                <h3 className={`text-center`}>About Me</h3>
                <p className={`text-center`}> Hello and welcome to my world. I am Michelle, A fresh graduate aspired to
                    use my communication, analytical and technical skills to provide a friendly, seamless, convenient
                    user experience to end user and to bring positive changes to application participated. </p>
            </div>
        </div>
    );
}

export default AboutMe;