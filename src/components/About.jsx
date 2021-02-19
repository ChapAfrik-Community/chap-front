import React from 'react'
import '../css/About.css';
import neige from '../assets/img/neige.jpg';
function About() {
    return (
        <section id="#about" className="about">
            <div className="about_text">
                <h1>About the Intentship</h1>
                <p>
                    The ChapAfrik intership is a 3-month remote intership program targeting entry level designers in the field of 
                    UI/UX,Graphics and Product design. The goal is to make you Job Ready in 5 months of intensive hands-on, training, 
                    coaching and mentoring. Our program is flexible and design to accommodate you irrespective of your location or time zone.
                </p>
                <p>
                    During this time, you will get opportunities to collaborate in real time with colleaggues from different parts of Africa
                    to deliver on 4 projects. This will prepare you for a smooth transition into the job market. Also, over the internship program
                    , you will get opportunity to build your portfolio in the chosen field by completing multiple personal projets that will give 
                    you a head start in job market by showcasing your accomplishments.
                </p>
                <p>
                    After succesful completion of all the stages in program, you will earn a well-recognized certificate from ChapAfrik to get you started.
                    You will also join the alumni group for further career support and possible mentorship.
                </p>
            </div>
            <div>
                <img src={neige} 
                alt="intership" 
                className="about__image"/>
            </div>
           
        </section>
    )
}

export default About
