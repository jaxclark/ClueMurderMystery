import React from 'react'
import Character from './Character'
import {withClue} from '../context/ClueProvider'




const CharacterList = props => {
   
   
    const mappedCharacter = props.characters.map((character, i) => <Character {...character} history={props.history} key={character._id} index={i} />)

    return(
        <div className="characterContainer">
            {mappedCharacter}
           
        </div>
        
    )
}

export default withClue(CharacterList)