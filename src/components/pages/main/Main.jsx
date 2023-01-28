import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import mainAnimation from '../../../images/mainImg.json';

function Main() {
    return ( 
        <div className="container">
            <h1>Main Page</h1>
            <Lottie animationData={mainAnimation} style={{height:"200px"}}/>
        </div>
     );
}

export default Main;