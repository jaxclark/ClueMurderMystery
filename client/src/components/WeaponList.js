import React from 'react'
import Weapon from './Weapon'
import {withClue} from '../context/ClueProvider'
import Particles from 'react-particles-js'
import particlesJSON from '../particlesjs-config.json'

const particlesVar = particlesJSON

const WeaponList = props => {
   
    const mappedWeapon = props.weapons.map((weapon) => <Weapon {...weapon} key={weapon._id}/>)
    
    return(
        <div className="weapons">
             
            <div className="weaponContainer">
                {mappedWeapon}
            </div>
            <div className='particles'>
                <Particles params={particlesVar} />
            </div>
        </div>
    )
}

export default withClue(WeaponList)