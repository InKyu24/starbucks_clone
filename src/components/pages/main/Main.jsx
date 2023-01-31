import React from 'react';
import MainBanner from './MainBanner';
import withAuth from '../../withAuth/withAuth';

function Main() {
    return ( 
        <MainBanner />
     );
}

export default withAuth(Main);