import React, { useState } from 'react'
import Startgame from './Components/StartGame/Startgame'
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayGame from './Components/PlayGame/PlayGame';



const App = () => {

  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setisGameStarted((prev) => !prev);
  };

  return (
    <>
    {isGameStarted ? <PlayGame/> : <Startgame toggle= {toggleGamePlay}/> }
    </>
  )
}

export default App
