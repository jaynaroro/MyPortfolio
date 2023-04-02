import React from 'react'
import profilePhoto from "../assets/JumaNaroroPP.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import react from "../assets/react.png"
import javascript from "../assets/javascript.png"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"



export default function Home(){
    return (
        <div className="home">
            <div className="about">
                <section className="about-text">
                    <h1>Frontend - React Developer</h1>
                    <p>Hi, Im Juma Naroro. A React Developer based in Nairobi, Kenya.</p>
                    <section className='social-icons'>
                        <a href="https://www.linkedin.com/in/jay-naroro/" target="_blank" rel="noopener noreferrer"> <img src={linkedin} /> </a>
                        <a href="https://github.com/jaynaroro" target="_blank" rel="noopener noreferrer" > <img src={github} /> </a>
                     </section>
                </section>
                <section className="about-image"><img className="profile-style" src={profilePhoto}/></section>
            </div>
            <div className="dev-stack">
                Dev Stack | <span className='dev-icons'><img src={html}/> <img src={javascript}/> <img src={css} /> <img src={react} /> </span>
            </div>
        </div>
    )
}