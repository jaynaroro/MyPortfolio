import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Header()
{
    const isActiveStyle = {
        textDecoration: "underline",
        fontWeight: 'bold',
        color: "#161616"
    }

    return (
        <div className="header">
            <NavLink style={({isActive})=> isActive ? isActiveStyle : null} className="home-link" to="/" >Home</NavLink>
            <NavLink style={({isActive})=> isActive ? isActiveStyle : null} to="projects">Projects</NavLink>
            <NavLink style={({isActive})=> isActive ? isActiveStyle : null} to="contact">Contact</NavLink>
        </div>
    )
}