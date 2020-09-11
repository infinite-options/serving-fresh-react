import React from 'react';

// components
import TopNav from './TopNav'
import BottomNav from './BottomNav';

import { withRouter } from 'react-router-dom'


const Layout = ({children,location}) => {
    return (
        <>
            {location.pathname !== '/' && <TopNav/>}
            {children}
            {location.pathname !== '/' && <BottomNav/>}
        </>
    );

}

export default withRouter(Layout);