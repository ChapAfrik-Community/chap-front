import React from 'react'
import JoinItem from '../joinItem/joinItem.component';

function Join() {
    return (
        <section className=""  style={{marginTop: '70px'}}>
            <div className="text-center mt-4">
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
        </section>
    )
}

export default Join
