import React, {Component} from 'react'
import Clues from './Clues'
import {withClue} from '../context/ClueProvider'

class CluesList extends Component {
    componentDidMount() {
        // this.props.updateCluesList()
        this.props.getAll()
    }
    
    render(){
        console.log(this.props.clues)
        const mappedClues = this.props.clues.map((clue) => <Clues name={clue.name}/>)
        return(
            <div>
                <h1>Clues List:</h1>
                {mappedClues}
            </div>
        )
    }
}

export default withClue(CluesList)