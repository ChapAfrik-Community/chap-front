import React from 'react'
import '../css/JoinUsItem.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function JoinUsItem({comment}) {
    return (
        <div className="joinUsItem">
            <CheckCircleIcon
            className="joinUsItem__icon"
            />
            <p className="joinUsItem__text">{comment}</p>
        </div>
    )
}
 
export default JoinUsItem
