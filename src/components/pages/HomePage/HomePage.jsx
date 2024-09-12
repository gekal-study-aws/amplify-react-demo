import React from 'react';
import PageTemplate from '../../templates/PageTemplate/PageTemplate';
import './HomePage.css';
import Form from "../../molecules/Form/Form";
import Button from "../../atoms/Button/Button";
import Counter from "../../molecules/Counter/Counter";
import MultiCounter from "../../molecules/MultiCounter/MultiCounter";

const HomePage = () => {
    return (
        <PageTemplate>
            <h2>Welcome to the Home Page</h2>
            <Form onSubmit={() => alert('Submit a form!')}> </Form>

            <Button label="Click Me" onClick={() => alert('Button clicked!')}/>

            <div>
                <h1>Counters that update seperated</h1>
                <Counter></Counter>
                <Counter></Counter>
            </div>

            <MultiCounter></MultiCounter>
        </PageTemplate>
    );
}

export default HomePage;
