import React from 'react';
import Header from '../../organisms/Header/Header';
import './PageTemplate.css';

const PageTemplate = ({ children }) => (
  <div className="page-template">
    <Header />
    {children}
  </div>
);

export default PageTemplate;
