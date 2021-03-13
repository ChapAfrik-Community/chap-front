import React from 'react'
import './about.component.css';
import AboutItem from './aboutitem/aboutitem.component';

function About() {
    return (
        <section
        id="about">
            <div className="row">
                <div className="col-md-6 mt-4 center">
                    <h1 className="font-weight-bold">About</h1>
                </div>
                <div className="col-md-6">
                   <AboutItem
                   title='Who we are?'
                   paragraph="ChapAfrik is a rapidly growing design community that connects young Africans 
                   with a strong passion for design to build an alternative career path in the tech industry.
                   We are passionate about using modern design principles to solve some of the social and 
                   economic challenges in our local communities and sometimes across the African continent"
                   /> 
                   <AboutItem
                   title='What we do?'
                   paragraph="We support aspiring designers at all stages of their career by providing opportunities for
                            visibility and growth, career development resources to grow soft skills and technical skills."
                   />
                   <AboutItem
                   title='Our Vision'
                   paragraph="A design community that upholds African culture and values in design solutions for social 
                   and economic challenges in Africa."
                   />
                   <AboutItem
                   title='Our Mission'
                   paragraph="To build a community that accelerates technical growth, networking, mentorship and 
                   visibility amongst in the design spheres across Africa."
                   />
                </div>
            </div>
        </section>
    )
}

export default About
