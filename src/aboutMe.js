import React from "react"
import "./index.css"
import {motion} from "framer-motion"

function AboutMe() {
    return (
        <div className={"rowStyle"}>
            <img src={"./images/icon_bg.png"} alt={"avatar"} style={{maxWidth: "300px", width: "auto"}}/>
            <div>
                <h3 className={`text-center`}>About Me</h3>
                <p className={`text-center`}> Hello and welcome to my world. I am Michelle, an enthusiastic and self-motivated fresh graduate aspired to be a user-focused developer by leveraging my technical, analytical and communication skills to create applications that offer a seamless and convenient user experience. </p>
            </div>
        </div>
    );
}

export default AboutMe;
