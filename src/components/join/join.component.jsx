import React from 'react'
import JoinItem from '../joinItem/joinItem.component';
import './join.component.css';
import { Link } from 'react-router-dom';

function Join() {
    return (
        <section id="join">
            <div className="text-center">
                <h3 className='font-weight-bold'>Want to join Us?</h3>
                <h2 className="font-weight-bold">Here's what you'll get</h2>
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
                    <Link to='/blank' className="btn-dange">Join our Community</Link>
                </div>
        </section>
    )
}

export default Join
