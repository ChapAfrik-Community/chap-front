import React from 'react'

function AboutItem({title, paragraph}) {
    return (
    <div>
        <h2 className="font-weight-bold mb-4 mt-4 about-item">{title}</h2>
        <p className="about-item">{paragraph}</p>
    </div>
        
    )
}

export default AboutItem
