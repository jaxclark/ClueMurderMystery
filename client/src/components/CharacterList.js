import React from 'react'
import Character from './Character'
import {withClue} from '../context/ClueProvider'
import Particles from 'react-particles-js'
import particlesJSON from '../particlesjs-config.json'

const particlesVar = particlesJSON

const CharacterList = props => {
   
    const mappedCharacter = props.characters.map((character, i) => <Character {...character} history={props.history} key={character._id} index={i} />)

    return(
        <div className="characterContainer">
            {mappedCharacter}
            <div className='particles'>
                <Particles params={particlesVar} />
            </div>
        </div>
    )
}

export default withClue(CharacterList)