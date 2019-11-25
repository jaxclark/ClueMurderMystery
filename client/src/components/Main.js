import React from 'react'
import {withClue} from '../context/ClueProvider' 




const Main = (props) => {
   return(
    <div>
        <button onClick={props.getAll}>Bert</button>
    </div>
   )
}


export default withClue(Main)