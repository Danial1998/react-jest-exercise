import React, { useState } from 'react'
import { add } from '../utils/mathUtils';

const Adder = () => {

    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    const [result,setResult] = useState(0);

    const handleAdd = () => {
        setResult(add(num1,num2));
    };

  return (
    <div>
        <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        data-testid="input-num1"
        />
        <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        data-testid="input-num2"
        />
        <button onClick={handleAdd} data-testid="add-button">Add</button>
        <h1 data-testid="result">{result}</h1>
    </div>
  )
};

export default Adder