import React from "react"
import "./index.css"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg"
             style={{backgroundColor: "var(--main-color)", position: "fixed", zIndex: 100, top: 0, width: "100vw"}}>
            <img src={"./images/logo.svg"} width="50" height="50" alt="logo" style={{paddingLeft: "5px"}}/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link disabled px-3" style={{color: "black"}}>Michelle Lin </a>
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link active" href="#project">Projects</a>
                    <a className="nav-link active" href="#contact">Contact</a>
                </div>
                <a className={"d-flex px-2"} href="https://github.com/linmv/homepage" target="_blank" rel="noreferrer nofollow">
                    <img src={"./images/github_black.png"} width="25" height="25" alt="github logo"/>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;