import React from 'react'
import './banner.component.css';

function Banner() {
    return (
    <header
        className="banner">
            <div className="banner__info">
               <div>
                   <h1>ChapAfrik Design </h1>
                   <h1>Internship 2021</h1>
                   <p>For Aspiring Young People</p>
               </div>
               <div>
                   A 3-month remote internship program targeting <br/> 
                   entry level designers in the field of UI/UX, 
                   Graphics and Product design.
               </div>
               <div>
                   <button className="btn btn-danger round">Apply Now</button>
               </div>
            </div>
          
       </header>
    )
}

export default Banner