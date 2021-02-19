import React from 'react'
import '../css/JoinUs.css'
import JoinUsItem from './JoinUsItem';

function JoinUs() {
    return (
        <section className="joinUs">
            <div className="joinUs__title">
                <h3>Want to join Us?</h3>
                <h2>Here's what you'll get</h2>
            </div>
            <div className="joinUs__item">
                <JoinUsItem
                comment="Excellent training programs"
                />
                <JoinUsItem
                comment="3 & 6 months Intenship program"
                />
                <JoinUsItem
                comment="Exclusive Career Mentorship"
                />
            </div>
            <div className="joinUs__item">
                <JoinUsItem
                comment="Fireplace networking sessions"
                />
                <JoinUsItem
                comment="Monthly virtual meetups"
                />
                <JoinUsItem
                comment="Job placement opportunities"
                />
            </div>

            {/* we will going to center this button */}
            <div className="joinUs_btn">
            <button
             className="joinUs__button">Join our Community</button>
            </div>
           
           

        </section>
    )
}

export default JoinUs
