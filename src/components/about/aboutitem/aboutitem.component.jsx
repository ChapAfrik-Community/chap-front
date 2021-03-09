import React from 'react'

function AboutItem({title, paragraph}) {
    return (
    <div>
        <h2 className="font-weight-bold mb-4 mt-4">{title}</h2>
        <p>{paragraph}</p>
    </div>
        
    )
}

export default AboutItem
