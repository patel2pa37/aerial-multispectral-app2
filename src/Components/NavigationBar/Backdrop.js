import React from 'react';

import './Backdrop.css';

const backdrop = props => {
    return(
    <div className = "backdrop" onClick={props.click}></div>
    )
}

export default backdrop;