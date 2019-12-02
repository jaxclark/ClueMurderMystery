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
            <div>
                <h1 className='lostHeader'>{this.props.title} {this.props.name} You lose! </h1>
                <h1 className='lostMessage'>Too many wrong guesses.</h1>
            </div>
            :
            <div>
                <h1 className='lostHeader'>{this.props.title} {this.props.name} You lose! </h1>
                <h1 className='lostMessage'>You looked at too many clues.</h1>
            </div>
            }
            <button className='restartBtn' onClick={this.handleClick} style ={{border: '1px solid black'}} >
              Play Again</button>
        </div>
    )
        }
}





export default withClue(GameOver)