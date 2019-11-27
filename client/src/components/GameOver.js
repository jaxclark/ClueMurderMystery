import React, {Component} from 'react'
import { withClue } from '../context/ClueProvider';


class GameOver extends Component {
    
    handleClick = () => {
        this.props.history.push('/')
        this.props.handleRestartClick()
    }
    render() {
    return (
        <div>
            { this.props.lostCount === true
            ?
            <h1>You lost because of accusations</h1>
            :
            <h1>You lost because you clicked on too many clues</h1>
            }
            <button onClick={this.handleClick} style ={{border: '1px solid black'}} >
              Play Again</button>
        </div>
    )
        }
}





export default withClue(GameOver)