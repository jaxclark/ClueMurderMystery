import React, {Component} from 'react'
import CluesListContainer from './AllCluesList'
import { withClue } from '../context/ClueProvider'

class Game extends Component {
    constructor(){
        super()
        this.state = {
            suspectName: ''
        }
    }

    handleClick = e => {
        e.preventDefault()
        this.setState({suspectName: e.target.value})
        this.props.updateClickCount()
        if(this.props.dead === true){
            this.props.history.push('/gameOver')
        }
    }

    render() {
        return(
            <div className='gameDiv'>
                <form className='gameForm'>
                    <button onClick={this.handleClick} name='Miss Scarlet' value='Miss Scarlet' className='gameInterviewButton'>Miss Scarlet</button>
                    <button onClick={this.handleClick} name='Colonel Mustard' value='Colonel Mustard' className='gameInterviewButton' >Colonel Mustard</button>
                    <button onClick={this.handleClick} name='Mrs. White' value='Mrs. White' className='gameInterviewButton'>Mrs. White</button>
                    <button onClick={this.handleClick} name='Mr. Green' value='Mr. Green' className='gameInterviewButton'>Mr. Green</button>
                    <button onClick={this.handleClick} name='Mrs. Peacock' value='Mrs. Peacock' className='gameInterviewButton'>Mrs. Peacock</button>
                    <button onClick={this.handleClick} name='Professor Plum' value='Professor Plum' className='gameInterviewButton'>Professor Plum</button>
                </form>
                <div className='gameClueDiv'>
                   clue container test
                </div>
                <div className='gameInterviewSuspect'>{`Interview Suspect: ${this.state.suspectName}`}</div>
                <CluesListContainer />
            </div>
        )
    }
}

export default withClue(Game)