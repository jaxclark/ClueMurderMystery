import React, {Component} from 'react'
import { withClue } from '../context/ClueProvider';
import Confetti from 'react-confetti';

class GameWon extends Component {

    handleClick = () => {
        this.props.history.push('/')
        this.props.handleRestartClick()
    }
    render() {
        return (
            <div className='gameOver'>
                <h1 className='wonMessage'>{`Congratulations ${this.props.title} ${this.props.name}! \nYou have solved the murder and won the game!`}</h1>
                <Confetti className='wonConfetti'/>
                <button className='restartBtn' style ={{border: '1px solid black'}} onClick={this.handleClick}>
                Play Again</button>
            </div>
        )
    }
}


export default withClue(GameWon)