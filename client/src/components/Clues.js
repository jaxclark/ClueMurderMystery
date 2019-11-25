import React from 'react'
import {withClue} from '../context/ClueProvider'

const Clues = (props) => {
    return(
        <div>
            <h3>{props.name}</h3>
        </div>
    )
}

export default withClue(Clues)