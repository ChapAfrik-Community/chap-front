import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function JoinItem({comment}) {
    return (
        <div className="col-xs-6 col-md-4 mt-4 text-center">
             <CheckCircleIcon
             style={{
                 fontSize:'50px'
             }}
            className="joinUsItem__icon"
            />
            <p className="text-center font-weight-bold join-item">{comment}</p>
        </div>
    )
}

export default JoinItem