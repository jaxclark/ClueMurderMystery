import React from 'react'
import {withClue} from '../context/ClueProvider'

const Weapon = (props) => {
    return (
        <div style={{border: "1px solid black"}}>
            <h5>{props.name}</h5>
            <p>{props.description}</p>
            <img src={props.imgUrl} alt="pic"/>
        </div>
    )
}

export default withClue(Weapon)