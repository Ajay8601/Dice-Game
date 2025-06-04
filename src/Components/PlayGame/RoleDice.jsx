import React, { useState } from 'react'
import './PlayGame.css'

const RoleDice = ( {currentDice, setCurrentDice, roleDice} ) => {






  return (
    <div className='diceContainer' onClick={roleDice}>
        <img src={`public/dice/dice_${currentDice}.png`} alt="dice images"  height={160}/>
        <p>Click on Dice to roll</p>
    </div>
  )
}

export default RoleDice
