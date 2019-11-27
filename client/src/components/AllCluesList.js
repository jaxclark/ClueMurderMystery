import React, {Component} from 'react'
import AllClues from './AllClues'
import {withClue} from '../context/ClueProvider'

class AllCluesList extends Component {
    
    render(){
        const mappedClues = this.props.clues.map((clue) => <AllClues name={clue.name} className={clue.name} key={clue._id}/>)
        return(
            <div>
                <h2>All Clues List:</h2>
                {mappedClues}
            </div>
        )
    }
}

export default withClue(AllCluesList)