import ReactDOM from 'react-dom/client'
import React, {useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {useSpring} from "@react-spring/web";
import {useLocation} from 'react-router-dom'
import NavBar from './navBar'
import FetchQuote from './quote'
import AboutMe from './aboutMe'
import Project from './project'
import Contact from './contact'
import "./index.css"
import {motion} from "framer-motion"

class App extends React.Component {
    render() {
        return (<BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/path" element={<Path/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
        </BrowserRouter>)
    }
}

function Home() {
    return (<div className={"scroll-container"}>
        <NavBar/>

        <section id="quoteOTD" style={{paddingTop: "90px"}}>
            <FetchQuote/>
        </section>

        <section id="aboutMe">
            <AboutMe/>
        </section>

        <section id="project">
            <Project/>
        </section>

        <section id="contact" style={{paddingTop: "50px"}}>
            <Contact/>
        </section>

        <div id="backToTop"><a href="#" target="_self"><img src="./images/1057133.png" alt="Top"/></a></div>

    </div>)
}

function Plane() {
    return (
        <svg width="300" height="350" viewBox="-70 -10 300 787" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                // className="planePath"
                d="M13.3777 75.9749L19.3127 75.9329L25.1918 67.9775L46.9536 67.8237L37.2997 101.525L45.2131 101.47L64.7587 67.6978L86.5205 67.5439C88.1691 67.5322 89.567 66.9447 90.7142 65.7811C91.8614 64.6176 92.4278 63.2129 92.4136 61.5669C92.4019 59.9183 91.8143 58.5204 90.6508 57.3732C89.4873 56.226 88.0825 55.6596 86.4366 55.6738L64.6748 55.8277L44.6535 22.3357L36.7401 22.3917L46.8697 55.9536L25.1079 56.1075L19.1169 48.2361L13.1819 48.278L17.2365 62.0985L13.3777 75.9749Z"
                fill="#6BD2F9"/>
        </svg>
    );
}

function Path() {
    const [length, setLength] = useState(null);
    // const svgLength = setLength(ref.getTotalLength());

    return (
        <div className={"container-fluid"} style={{position: "relative"}}>
            <br></br>
            <svg
                style={{position: 'absolute'}} width="387" height="393.5" viewBox="0 0 387 800" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <path id="path1"
                          d="M1 1C246.127 1.84174 466 121.125 357 211.5C248 301.875 67.3119 246 37.769 360.5C8.22614 475 271.426 502 306.341 609.5C341.255 717 239.869 786 239.869 786"/>
                    <mask id={"mask1"}>
                        <use className={"mask"} xlinkHref="#path1"/>
                    </mask>
                </defs>
                <use className="paths" xlinkHref="#path1" mask="url(#mask1)"/>
            </svg>

            <svg id={"plane"}
                 style={{position: 'absolute'}} width="387" height="393.5" viewBox="0 0 387 800" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path className="planePath"
                      d="M0.37769 53.9749L6.31272 53.9329L12.1918 45.9775L33.9536 45.8237L24.2997 79.5255L32.2131 79.4695L51.7587 45.6978L73.5205 45.5439C75.1691 45.5322 76.567 44.9447 77.7142 43.7811C78.8614 42.6176 79.4278 41.2129 79.4136 39.5669C79.4019 37.9183 78.8143 36.5204 77.6508 35.3732C76.4873 34.226 75.0825 33.6596 73.4366 33.6738L51.6748 33.8277L31.6535 0.335732L23.7401 0.391685L33.8697 33.9536L12.1079 34.1075L6.11688 26.2361L0.181851 26.278L4.23646 40.0985L0.37769 53.9749Z"
                      fill="#6BD2F9"/>
            </svg>
        </div>)
}

function NoMatch() {
    let location = useLocation()
    return (<div className="container-fluid">
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>)
}

const root = ReactDOM.createRoot(document.querySelector('#web'))
root.render(<App name="Michelle's Homepage"/>)