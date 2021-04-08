import React from 'react'
import JoinItem from '../joinItem/joinItem.component';
import './join.component.css';

function Join() {
    return (
        <section id="join">
            <div className="text-center">
                <h3 className='font-weight-bold join-title'>Want to join Us?</h3>
                <h2 className="font-weight-bold about join-title">Here's what you'll get</h2>
            </div>
            <div className="row">
                <JoinItem
                comment="Excellent training programs"
                />
                <JoinItem
                comment="3 & 6 months Intenship program"
                />
                <JoinItem
                comment="Exclusive Career Mentorship"
                />
                 <JoinItem
                comment="Fireplace networking sessions"
                />
                <JoinItem
                comment="Monthly virtual meetups"
                />
                <JoinItem
                comment="Job placement opportunities"
                />
               
            </div>
            <div
                className="button"
                style={{
                    marginTop:'20px',
                    marginBottom:'30px'
                    }}>
                    <a href='https://join.slack.com/t/chapafrik/shared_invite/zt-nmkpw4dd-w_mIdMC39OoR_H4y_P6LpA' target="_blank" rel='noopener noreferrer' className="btn btn-danger round">Join our community</a>
                </div>
        </section>
    )
}

export default Join
