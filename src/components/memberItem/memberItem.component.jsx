import React from 'react'

function MemberItem({img, name, nationality}) {
    return (
        <div className="col-xs-6 col-md-4 mt-4 text-center">
            <img
            style={{
                width:'50%'
            }}
            className="img-fluid member-avatar"
             src={img} 
             alt="img_name"/>
             <br/>
             <br/>
            <p className="font-weight-bold member-name">{name}</p>
            <p className="small member-nation">{nationality}</p>
        </div>
    )
}

export default MemberItem;
