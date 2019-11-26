import React from 'react'
import { withClue } from '../context/ClueProvider';


const GameWon = (props) => {

    return (
        <div>
            <h1>YOU WIN!!!!</h1>
            <button style ={{border: '1px solid black'}} onClick={props.handleRestartClick}>
              Play Again</button>
        </div>
    )
}





export default withClue(GameWon)