import React from 'react'
import '../css/TeamMemberItem.css';
function TeamMemberItem({img, fullname, nation}) {
    return (
        <div className="teamMemberItem">
            <img
            className="teamMemberItem__img"
             src={img} 
             alt="img_name"/>
            <p className="teamMemberItem__name">{fullname}</p>
            <p className="teamMemberItem__nation">{nation}</p>
        </div>
    )
}

export default TeamMemberItem
