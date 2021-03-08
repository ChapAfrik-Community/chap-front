import React from 'react'
import './banner.component.css';

function Banner() {
    return (
    <header
        className="banner">
            <div className="banner__info">
               <div>
                   <h1 className='font-weight-bold'>ChapAfrik Design </h1>
                   <h1 className='font-weight-bold'>Internship 2021</h1>
                   <p>For Aspiring Young People</p>
               </div>
               <div>
                   A 3-month remote internship program targeting <br/> 
                   entry level designers in the field of UI/UX, 
                   Graphics and Product design.
               </div>
               <div>
                   <a href='https://forms.gle/cudtLhsYLHYHnovT7' target="_blank" rel='noopener noreferrer' className="btn btn-danger round">Apply Now</a>
               </div>
            </div>
          
       </header>
    )
}

export default Banner