import React from 'react'
import './readyJoin.component.css';

function ReadyJoin() {
    return (
        <section id="readyjoin" className="ready">
            <h3 className="display-7 ready-title">Ready to join us?</h3>
            <h1 className="display-5 ready-title">Apply for the ChapAfrik Design Internship</h1>
            <small className="ready-title">Join the 3-month internship design program and connect with designers across Africa</small>
            <div>
            <a href='https://forms.gle/cudtLhsYLHYHnovT7' target="_blank" rel='noopener noreferrer' className="btn btn-danger round mf-0 button-ready">Apply Now</a>
            </div>
        </section>
    )
}

export default ReadyJoin
