import React from 'react'
import { withClue } from '../context/ClueProvider';


const GameOver = (props) => {

    // handleClick = () => {
    //     props.startAgain()
    // }

    return (
        <div>
            <button style ={{border: '1px solid black'}}>
             {/* onClick={this.handleClick} */}
             Play Again</button>
        </div>
    )
}





export default withClue(GameOver)