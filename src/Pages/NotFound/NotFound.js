import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';

import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className="not-found">
                <h2>404, Page Not Found</h2>
            </div>
        </>
    );
};

export default NotFound;