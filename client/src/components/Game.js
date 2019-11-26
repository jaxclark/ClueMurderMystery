import React, {Component} from 'react'
import CluesListContainer from './CluesListContainer'
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
    }

    render() {
        return(
            <div>
                <form>
                    <button onClick={this.handleClick} name='Miss Scarlet' value='Miss Scarlet' >Miss Scarlet</button>
                    <button onClick={this.handleClick} name='Colonel Mustard' value='Colonel Mustard' >Colonel Mustard</button>
                    <button onClick={this.handleClick} name='Mrs. White' value='Mrs. White' >Mrs. White</button>
                    <button onClick={this.handleClick} name='Mr. Green' value='Mr. Green' >Mr. Green</button>
                    <button onClick={this.handleClick} name='Mrs. Peacock' value='Mrs. Peacock' >Mrs. Peacock</button>
                    <button onClick={this.handleClick} name='Professor Plum' value='Professor Plum' >Professor Plum</button>
                </form>
                <div>{`Interview Suspect: ${this.state.suspectName}`}</div>
                <CluesListContainer />
            </div>
        )
    }
}

export default withClue(Game)