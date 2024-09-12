import {useState} from 'react';
import './MultiCounter.css';

const MultiCounter = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update together</h1>
            <Counter count={count} onClick={handleClick}/>
            <Counter count={count} onClick={handleClick}/>
        </div>
    );
}

const Counter = ({count, onClick}) => {

    return (
        <button type="button" onClick={onClick} className="multi-counter">
            Clicked {count} times
        </button>
    );
}

export default MultiCounter;
