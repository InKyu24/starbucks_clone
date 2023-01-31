import React from 'react';
import { mainBanner } from '../../../data/mainBanner';

function Store() {

    return ( 
        <div className="container">
            <h1>헬로 스토어</h1>
            <h2>{mainBanner.title}</h2>
            {
                mainBanner.menus.map(e => 
                    <div key={e.id}>e.id</div>
                )
            }        
        </div>
     );
}

export default Store;