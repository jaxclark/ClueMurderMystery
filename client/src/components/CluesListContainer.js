import React, {Component} from 'react'
import Clues from './Clues'
import {withClue} from '../context/ClueProvider'

class CluesListContainer extends Component {
    componentDidMount() {
        // this.props.updateCluesList()
        this.props.getAll()
    }
    
    render(){
        const mappedClues = this.props.clues.map((clue) => <Clues name={clue.name}/>)
        return(
            <div>
                <h2>Found Clues List:</h2>
                {mappedClues}
            </div>
        )
    }
}

export default withClue(CluesListContainer)