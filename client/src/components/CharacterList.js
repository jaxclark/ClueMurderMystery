import React from 'react'
import Character from './Character'
import {withClue} from '../context/ClueProvider'

const CharacterList = props => {
   
    const mappedCharacter = props.characters.map((character) => <Character {...character} key={character._id} />)

    return(
        <div>
            {mappedCharacter}
        </div>
        
    )
}

export default withClue(CharacterList)