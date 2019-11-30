import React from 'react'
import Weapon from './Weapon'
import {withClue} from '../context/ClueProvider'
import Particles from './Particle'

const WeaponList = props => {
   
    const mappedWeapon = props.weapons.map((weapon) => <Weapon {...weapon} key={weapon._id}/>)
    
    return(
        <div className="weapons">
             
            <div className="weaponContainer">
                {mappedWeapon}
            </div>    
           <Particles />
        </div>
    )
}

export default withClue(WeaponList)