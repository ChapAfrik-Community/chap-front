import React from 'react'
import aboutimg from  '../../assets/images/aboutimg.jpg'

function Internship() {
    return (
        <section className="mt-30" style={{marginTop: '50px'}}>
            <div className="row">
                <div className="col-md-6 mt-4">
                    <h1 className='font-weight-bold'>About the Intentship</h1>
                    <p>
                        The ChapAfrik intership is a 3-month remote intership program targeting entry level designers in the field of 
                        UI/UX,Graphics and Product design. The goal is to make you Job Ready in 5 months of intensive hands-on, training, 
                        coaching and mentoring. Our program is flexible and design to accommodate you irrespective of your location or time zone.
                    </p>
                    <p>
                        During this time, you will get opportunities to collaborate in real time with colleaggues from different parts of Africa
                        to deliver on 4 projects. This will prepare you for a smooth transition into the job market. Also, over the internship program
                        , you will get opportunity to build your portfolio in the chosen field by completing multiple personal projets that will give 
                        you a head start in job market by showcasing your accomplishments.
                    </p>
                    <p>
                        After succesful completion of all the stages in program, you will earn a well-recognized certificate from ChapAfrik to get you started.
                        You will also join the alumni group for further career support and possible mentorship.
                    </p>
                </div>
                <div className="col-md-6">
                    <img
                    className="img-fluid"
                        style={{
                            width:'500px',
                            objectFit:'contain',
                            height: '600px'
                        }}
                     src={aboutimg} alt="..."/>
                </div>
            </div>
        </section>
    )
}

export default Internship;