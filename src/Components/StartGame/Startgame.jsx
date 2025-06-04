import React from 'react'

import './Startgame.css';

const Startgame = ({ toggle }) => {
    return (
        <div className='container'>
            <div>
                <img src="/dices 1.png" alt="dice_image" />
            </div>
            <div className='diceName'>
                <h1>Dice Game</h1>
                <button onClick={toggle} type="button" class="btn btn-primary">Play Now</button>

            </div>

        </div>
    )
}

export default Startgame
