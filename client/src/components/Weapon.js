import React from 'react'
import {withClue} from '../context/ClueProvider'

const Weapon = (props) => {

    const {name, description, imgUrl, path, handleChange, weapon} = props
    let myClass
    
        path === '/accuse-suspect'
        ?
            name === weapon
            ?
            myClass = 'accusedSelected'
            :
            myClass = 'accusationWeapon'
        :
         myClass = 'weapon'

    return (
        <>
        {
            myClass === 'accusationWeapon'
            ?
            <button className={myClass} onClick={() => handleChange('weapon', name)} style={{border: "1px solid black"}}>
                <h5>{name}</h5>
                <p>{description}</p>
                <img src={imgUrl} alt="pic"/>
            </button>
            :
            <div className={myClass} style={{border: "1px solid black"}}>
                <h5>{name}</h5>
                <p>{description}</p>
                <img src={imgUrl} alt="pic"/>
            </div>
        }
        </>
    )
}

export default withClue(Weapon)