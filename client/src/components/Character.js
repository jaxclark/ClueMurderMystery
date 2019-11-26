import React from 'react'
import {withClue} from '../context/ClueProvider'

const Character = (props) => {
    const {name, gender, age, description, imgUrl} = props 
    return (
        <div style={{border: "1px solid black"}}>
            <h5>{name}</h5>
            <h6>{gender}</h6>
            <h6>{age}</h6>
            <p>{description}</p>
            <img src={imgUrl} alt="pic"/>

        </div>
    )
}

export default withClue(Character)