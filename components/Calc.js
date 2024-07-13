
import { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [evaled, setEvaled] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
            setEvaled(eval(input));
            } catch {
                setEvaled('ERROR')
            }
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
            
            <style jsx>{`
                .calculator {
                    max-width: 300px;
                    margin: 50px auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 30px;
                    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
                }
                .display {
                    font-size: 2em;
                    margin-bottom: 20px;
                    text-align: right;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    background: #f9f9f9;
                }
                .input {
                    height: 40px;
                }
                .evaled {
                    height: 40px;
                    color: #888;
                }
                .buttons {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 10px;
                }
                button {
                    font-size: 1.5em;
                    padding: 20px;
                    border: none;
                    border-radius: 30px;
                    background: #f1f1f1;
                    cursor: pointer;
                    transition: background 0.3s;
                }
                button:hover {
                    background: #ddd;
                }
            `}</style>
            
        </div>
    );
};

export default Calculator;
