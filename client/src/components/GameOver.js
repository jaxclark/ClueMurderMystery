import React from 'react'
import { withClue } from '../context/ClueProvider';


const GameOver = (props) => {

    return (
        <div>
            { props.lostCount === true
            ?
            <h1>You lost because of accusations</h1>
            :
            <h1>You lost because you clicked on too many clues</h1>
            }
            <button onClick={props.handleRestartClick} style ={{border: '1px solid black'}} >
              Play Again</button>
        </div>
    )
}





export default withClue(GameOver)