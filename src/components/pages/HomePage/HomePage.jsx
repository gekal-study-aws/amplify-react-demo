import React from 'react';
import PageTemplate from '../../templates/PageTemplate/PageTemplate';
import './HomePage.css';
import Button from "../../atoms/Button/Button";

const HomePage = () => (
    <PageTemplate>
        <h2>Welcome to the Home Page</h2>
        <Button label="Click Me" onClick={() => alert('Button clicked!')}/>
    </PageTemplate>
);

export default HomePage;
