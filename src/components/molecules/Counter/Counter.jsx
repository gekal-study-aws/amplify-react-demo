import {useState} from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <button type="button" onClick={handleClick} className="counter">
                Clicked {count} times
            </button>
        </div>
    );
}

export default Counter;
