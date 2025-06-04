import React, { useState } from 'react';
import './PlayGame.css';

const NumberSelector = ( { seterror, error, selectedNumber, setSelectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    seterror("");
  };
 

  return (
    <div className="Header">
      <p className='error'>{error}</p>
    <div className="box">
      {arrNumber.map((value) => {

        const boxStyle = {
          backgroundColor: value === selectedNumber ? 'black' : 'white',
          color: value === selectedNumber ? 'white' : 'black',
        };

        return (
          <div
            key={value}
            onClick={() => numberSelectorHandler(value)}
            className="boxes"
            style={boxStyle}
            
          >
            {value}
          </div>
          
        );
      })}
      
    </div>
    <p> Select Number</p>
    </div>

  );
};

export default NumberSelector;
