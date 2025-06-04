import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button } from 'bootstrap'
import Rules from './Rules'

const PlayGame = () => {
  const [score, setscore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, seterror] = useState("");
  const [showRules, setShowRules] = useState(false);


  const generteRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      seterror("You have not selected any number")
      return;
    }

    const randomNumber = generteRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setscore((prev) => prev + 10);
    }
    else {
      setscore((prev) => prev - 2)
    }
    setSelectedNumber(undefined);
  };
  const resetScore = () => {
    setscore(0);
  }



  return (

    <div>
      <div className="header">
        <TotalScore score={score} />
        <NumberSelector error={error} seterror={seterror} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice currentDice={currentDice} setCurrentDice={setCurrentDice} roleDice={roleDice} />

      <div className='btns'>

      <button type="button" class="btn-primary1" onClick={resetScore}>Reset</button>
      <button onClick={() => setShowRules(prev => !prev)} type="button" class="btn-primary2" > Show Rules</button>

      </div>
      { showRules && <Rules/>}


    </div>
  )
}

export default PlayGame
