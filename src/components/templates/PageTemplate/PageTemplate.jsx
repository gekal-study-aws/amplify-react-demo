import React from 'react';
import Header from '../../organisms/Header/Header';
import './PageTemplate.css';

const PageTemplate = ({children}) => {
    return (
        <div className="page-template">
            <Header/>
            {children}
        </div>
    );
}

export default PageTemplate;
