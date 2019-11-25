import React, {Component} from 'react'
import Clues from './Clues'
import {withClue} from '../context/ClueProvider'

class CluesList extends Component {
    componentDidMount() {
        this.props.updateCluesList()
    }
    
    render(){
        const mappedClues = this.props.clues.map((clue) => <Clues name={clue.name} image={clue.imgUrl} />)
        return(
            <div>
                <h1>Clues List:</h1>
                {mappedClues}
            </div>
        )
    }
}

export default withClue(CluesList)