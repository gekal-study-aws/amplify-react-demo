import React from 'react';
import PageTemplate from '../../templates/PageTemplate/PageTemplate';
import './HomePage.css';
import Form from "../../molecules/Form/Form";
import Button from "../../atoms/Button/Button";

const HomePage = () => (
    <PageTemplate>
        <h2>Welcome to the Home Page</h2>
        <Form onSubmit={() => alert('Submit a form!')}> </Form>

        <Button label="Click Me" onClick={() => alert('Button clicked!')}/>
    </PageTemplate>
);

export default HomePage;
