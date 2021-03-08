import React from 'react'
import './readyJoin.component.css';

function ReadyJoin() {
    return (
        <section className="ready"  style={{marginTop: '70px'}}>
            <h3 className="display-7">Ready to join us?</h3>
            <h1 className="display-5">Apply for the ChapAfrik Design Internship</h1>
            <small>Join the 3-month internship design program and connect with designers across Africa</small>
            <br/>
            <div>
            <a href='https://forms.gle/cudtLhsYLHYHnovT7' target="_blank" rel='noopener noreferrer' className="btn btn-danger round">Apply Now</a>
            </div>
        </section>
    )
}

export default ReadyJoin
