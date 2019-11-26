import React from 'react'
import Weapon from './Weapon'
import {withClue} from '../context/ClueProvider'

const WeaponList = props => {
   
    const mappedWeapon = props.weapons.map((weapon) => <Weapon {...weapon} key={weapon._id}/>)
    
    return(
        <div>
            {mappedWeapon}
        </div>
        
    )
}

export default withClue(WeaponList)