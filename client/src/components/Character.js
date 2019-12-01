import React from 'react'
import {withClue} from '../context/ClueProvider'


const Character = (props) => {
    const {name, gender, age, description, imgUrl, path, handleChange, murderer} = props
    let myClass
    
        path === '/accuse-suspect'
        ?
            name === murderer
            ?
            myClass = 'accusedSelected'
            :
            myClass = 'accusationChar'
        :
         myClass = 'character'
    
    return (
        <>
        {
            myClass === 'accusationChar' || myClass === 'accusedSelected'
            ?
            <button className = {myClass} onClick={() => handleChange('murderer', name)}>
                <div className='charCards'>
                    <h5>{name}</h5>
                    <h6>{gender}</h6>
                    <h6>{age}</h6>
                    <p>{description}</p>
                    <img className='charCardImage' src={imgUrl} alt="pic"/>
                </div>
            </button>
            :
            <div className = {myClass}>
                <div className='charCards'>
                    <img className='charCardImage' src={imgUrl} alt="pic"/>
                    <h5>{name}</h5>
                    <h6>{gender}</h6>
                    <h6>{age}</h6>
                    <p>{description}</p>
                </div>
            </div>
            
        }
        
            
        </>
    )
}

export default withClue(Character)