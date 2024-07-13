
import { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [evaled, setEvaled] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            setEvaled(eval(input));
        } else if (value === 'C') {
            setInput('');
            setEvaled('');
        } else {
            setInput((prev) => prev + value);
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="input">{input}</div>
                <div className="evaled">{evaled}</div>
            </div>
            <div className="buttons">
                {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', 'C', '=', '/'].map((button) => (
                    <button key={button} onClick={() => handleButtonClick(button)}>
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
