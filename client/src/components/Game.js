import React, {Component} from 'react'
import CluesListContainer from './AllCluesList'
import { withClue } from '../context/ClueProvider'

class Game extends Component {
    constructor(){
        super()
        this.state = {
            suspectName: '',
            tutorial: 'main'
        }
    }

    handleClick = e => {
        e.preventDefault()
        this.setState({suspectName: e.target.value})
        this.props.updateClickCount()
        if(this.props.dead === true){
            this.props.history.push('/gameOver')
        }
        // const interviewSuspect = this.props.characters.find((char => {char }))
    }

    handleTutorialToggle = e => {
        if(e.target.value === 'tutorial'){
            this.setState({tutorial: 'tutorial'})
        } else {
            this.setState({tutorial: 'play'})
        }
    }

    render() {
        return(
            <div className='gameDiv'>
                {this.state.tutorial === 'main' ?
                <div className='gameTutorial'>
                    <h1 className='gameTutorialHeader'>Would you like to read the tutorial?</h1>
                    <button onClick={this.handleTutorialToggle} value='tutorial' >Yes</button>
                    <button onClick={this.handleTutorialToggle} value='play' >No</button>
                </div>
                : this.state.tutorial === 'tutorial' ?
                <div style={{border: '1px solid black', backgroundColor: 'lightblue', margin: '40px 0px 0px 0px'}}>
                    <h3>Tutorial info</h3>
                    <button onClick={this.handleToggle} value='play' >Play</button>
                </div>
                :
                <div style={{display: 'none'}}>
                </div>
                }<form>
                    <button onClick={this.handleClick} name='Miss Scarlet' value='Miss Scarlet' >Miss Scarlet</button>
                    <button onClick={this.handleClick} name='Colonel Mustard' value='Colonel Mustard' >Colonel Mustard</button>
                    <button onClick={this.handleClick} name='Mrs. White' value='Mrs. White' >Mrs. White</button>
                    <button onClick={this.handleClick} name='Mr. Green' value='Mr. Green' >Mr. Green</button>
                    <button onClick={this.handleClick} name='Mrs. Peacock' value='Mrs. Peacock' >Mrs. Peacock</button>
                    <button onClick={this.handleClick} name='Professor Plum' value='Professor Plum' >Professor Plum</button>
                </form>
                <div>{`Interview Suspect: ${this.state.suspectName}`}</div>
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