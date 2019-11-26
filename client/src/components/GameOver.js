import React from 'react'
import { withClue } from '../context/ClueProvider';


const GameOver = (props) => {




    return (
        <div>
            <button style ={{border: '1px solid black'}} onClick={props.handleRestartClick}>
              Play Again</button>
        </div>
    )
}





export default withClue(GameOver)