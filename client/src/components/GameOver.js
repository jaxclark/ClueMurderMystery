import React, {Component} from 'react'
import { withClue } from '../context/ClueProvider';


class GameOver extends Component {
    
    handleClick = () => {
        this.props.history.push('/')
        this.props.handleRestartClick()
    }
    render() {
    return (
        <div className='gameOver'>
            { this.props.lostCount === true
            ?
            <h1 className='lost'>{this.props.title} {this.props.name} lost- too many wrong guesses.</h1>
            :
            <h1 className='lost'>{this.props.title} {this.props.name} lost- you looked at too many clues!</h1>
            }
            <button className='restartBtn' onClick={this.handleClick} style ={{border: '1px solid black'}} >
              Play Again</button>
        </div>
    )
        }
}





export default withClue(GameOver)