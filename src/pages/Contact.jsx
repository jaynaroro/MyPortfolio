import React from 'react'
import gmail from '../assets/gmail.png'
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

export default function Contact(){
    const [isMailHover, setIsMailHover] = React.useState(false)
    const [isLinkedinHover, setIsLinkedinHover] = React.useState(false)
    const [isGithubHover, setIsGithubHover] = React.useState(false)

    const handleMailMouseOver = function (){
        setIsMailHover(true)
    }

    const handleMailMouseOut = function (){
        setIsMailHover(false)
    } 
    const handleLinkedinMouseOver = function (){
        setIsLinkedinHover(true)
    }

    const handleLinkedinMouseOut = function (){
        setIsLinkedinHover(false)
    } 
    const handleGithubMouseOver = function (){
        setIsGithubHover(true)
    }

    const handleGithubMouseOut = function (){
        setIsGithubHover(false)
    } 

    return (
        <div className="contact">
            <h1>Contacts Info</h1>
            <section className='contact-info'>
                <a className='contact-links' onMouseOver={handleMailMouseOver} onMouseOut={handleMailMouseOut} href='mailto:narorojay2@gmail.com' target="_blank" rel="noopener noreferrer"> <img src={gmail} />  {isMailHover ? 'narorojay2@gmail.com' : null} </a>
                <a className='contact-links' onMouseOver={handleLinkedinMouseOver} onMouseOut={handleLinkedinMouseOut} href='https://www.linkedin.com/in/jay-naroro/' target="_blank" rel="noopener noreferrer"> <img src={linkedin} />  {isLinkedinHover ? 'Linkedin' : null} </a>
                <a className='contact-links' onMouseOver={handleGithubMouseOver} onMouseOut={handleGithubMouseOut} href='https://github.com/jaynaroro' target="_blank" rel="noopener noreferrer"> <img src={github} /> {isGithubHover ? 'Github' : null} </a>
            </section>
        </div>
    )
}