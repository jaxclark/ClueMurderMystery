import React from 'react'
import { withClue } from '../context/ClueProvider';
import FoundClue from './FoundClue'

const FoundCluesList = props => {
    const mappedClues = props.foundClues.map(((clue) => <FoundClue {...clue} key={clue._id} canQuestion={true}/>))
    return(
        <div>
        {mappedClues}
        </div>
    )
}

export default withClue(FoundCluesList)