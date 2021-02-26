import React from 'react'

function MemberItem({img, name, nationality}) {
    return (
        <div className="col-xs-6 col-md-4 mt-4 text-center">
            <img
            style={{
                width:'50%'
            }}
            className="img-fluid"
             src={img} 
             alt="img_name"/>
            <p className="font-weight-bold">{name}</p>
            <p className="small">{nationality}</p>
        </div>
    )
}

export default MemberItem;
