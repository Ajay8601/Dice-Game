import React from 'react'
import './PlayGame.css'

const Rules = () => {
  return (
    <div className='Rules'>
      <h2>
        How to Play dice game
      </h2>
      <div className="text_p">
      <p>Select any number</p>
      <p>Click on dice imgae</p>
      <p>after click on dice if selected number is equal to dice number you will get same point as dice{" "}</p>
      <p>if you ger wrong guess then 10 point will be dedcuted</p>
      </div>
    </div>
  )
}

export default Rules
