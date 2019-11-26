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
        const interviewSuspect = this.props.characters.find((char => {char }))
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
            <div>{ this.state.tutorial === 'main' ?
                <div style={{border: '1px solid black', backgroundColor: 'lightblue', margin: '40px 0px 0px 0px'}}>
                    <h1>Would you like to read the tutorial?</h1>
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
                <div>

                </div>
                <div>{`Interview Suspect: ${this.state.suspectName}`}</div>
                <CluesListContainer />
            </div>
        )
    }
}

export default withClue(Game)