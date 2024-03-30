import React, { useState } from 'react';
import './Cal.css';

const Cal = () => {
  const [num, setNum] = useState('');

  const handleButtonClick = (value) => {
    setNum(num + value);
  };

  const calculate = () => {
    try {
      setNum(eval(num));
    } catch (error) {
      setNum('Error');
    }
  };

  const clear = () => {
    setNum('');
  };
  return (
    <>
      <center><h3 id="h3">Calculator App</h3></center>
      <center><input type="text" value={num} id="input"/></center>
      <div className="col">
        <div className="row">
          <button className="btn btn-primary" onClick={() => handleButtonClick('7')}>7</button>
          <button className="btn btn-primary" onClick={() => handleButtonClick('8')}>8</button>
          <button className="btn btn-primary" onClick={() => handleButtonClick('9')}>9</button>
          <button className="btn btn-success" onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button className="btn btn-primary" onClick={() => handleButtonClick('4')}>4</button>
          <button className="btn btn-primary" onClick={() => handleButtonClick('5')}>5</button>
          <button className="btn btn-primary" onClick={() => handleButtonClick('6')}>6</button>
          <button className="btn btn-success" onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button className="btn btn-primary" onClick={() => handleButtonClick('1')}>1</button>
          <button className="btn btn-primary" onClick={() => handleButtonClick('2')}>2</button>
          <button className="btn btn-primary" onClick={() => handleButtonClick('3')}>3</button>
          <button className="btn btn-success" onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button className="btn btn-warning" onClick={clear}>C</button>
          <button className="btn btn-primary" onClick={() => handleButtonClick('0')}>0</button>
          <button className="btn btn-warning" onClick={calculate}>=</button>
          <button className="btn btn-success" onClick={() => handleButtonClick('-')}>-</button>
        </div>
      </div>
    </>
  );
};

export default Cal;
