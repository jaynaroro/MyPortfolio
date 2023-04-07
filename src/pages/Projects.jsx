import React from 'react'
import Tenzies from '../assets/tenzis.png'
import Game from '../assets/game.jpg'
import Vanlife from '../assets/VanLife.jpg'
import code from '../assets/code.png'

export default function Projects(){
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className='projects-section'>
                <section className='project-card'>
                    <img className='card-image' src={Vanlife}/>
                    <section className='card-text'>
                        The #Vanlife project is a React Router focused project, putting emphasis on nested routes
                        and Data Layer API's. The Project is a close replica of an Ecommerce site that allows clients to 
                        view and hire vans posted by van owners.
                    </section>
                    <section className='card-links'>
                        <a href="https://naroro-vanlife.netlify.app/" target="_blank" rel="noopener noreferrer" >Live Demo</a> <a href='https://github.com/jaynaroro/-VanLife' target="_blank" rel="noopener noreferrer"> <img src={code}/> </a>
                    </section>
                </section>

                <section className='project-card'>
                    <img className='card-image'  src={Tenzies}/>
                    <section className='card-text'>
                        The Tenzies project focuses on State management with different pieces of state changing within a single DOM Element.
                        The game is simple, roll the die, hold a number, try to match all die with the same number, using the least number of rolls.
                    </section>
                    <section className='card-links'>
                        <a href="https://naroro-reacttenziesgame.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a> <a href='https://github.com/jaynaroro/react-tenzies-game' target="_blank" rel="noopener noreferrer"> <img src={code}/> </a>
                    </section>
                </section>

                <section className='project-card'>
                    <img className='card-image' src={Game} />
                    <section className='card-text'>
                        A basic UI React Skeleton for an Ecommerce website. Focussing on the cart logic, the app shows the
                        interface to be integrated with payment API's such as Stripe or MPESA.
                    </section>
                    <section className='card-links'>
                        <a href="https://naroro-gamingshop.netlify.app/" target="_blank" rel="noopener noreferrer" >Live Demo</a> <a href='https://github.com/jaynaroro/GamingShop' target="_blank" rel="noopener noreferrer"> <img src={code}/> </a>
                    </section>
                </section>
            </div>
        </div>
    )
}