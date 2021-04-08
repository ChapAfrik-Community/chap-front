import React from 'react'
import './about.component.css';
import AboutItem from './aboutitem/aboutitem.component';
import { aboutdata } from './aboutData';

function About() {
    return (
        <section
        id="about">
            <div className="row">
                <div className="col-md-6 mt-4 center">
                    <h1 className="font-weight-bold about-title">About</h1>
                </div>
                <div className="col-md-6">
                  { aboutdata.map((data, index)=>(
                       <AboutItem
                       key={index}
                       title={data.title}
                       paragraph={data.paragraph}
                       /> 
                  ))}
                   
                </div>
            </div>
        </section>
    )
}

export default About
