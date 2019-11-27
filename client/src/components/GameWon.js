import React, {Component} from 'react'
import { withClue } from '../context/ClueProvider';


class GameWon extends Component {

    handleClick = () => {
        this.props.history.push('/')
        this.props.handleRestartClick()
    }
    render() {
        return (
            <div>
                <h1>YOU WIN!!!!</h1>
                <button style ={{border: '1px solid black'}} onClick={this.handleClick}>
                Play Again</button>
            </div>
        )
    }
}




export default withClue(GameWon)