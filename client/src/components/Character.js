import React, {Component} from 'react'
import {withClue} from '../context/ClueProvider'


class Character extends Component { 

    constructor() {
        super()
        this.state = {
            canQuestion: false
        }
    }

    question = () => {
        let filtered = this.props.foundClues.filter(ind => {
            return ind.character === this.props.name
        }) 
        {filtered[0]
        ?
        this.setState({
            canQuestion: true
        })
         :
        this.setState({
            canQuestion: false
        })}
        this.props.updateClickCount()
        if(this.props.dead === true){
            this.props.history.push('/gameOver')
        }
    }


 render() {
    const {name, gender, age, description, imgUrl, path, handleChange, murderer, killer} = this.props
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
                        <div className='accuseCharCards'>
                            {/* <h5>{name}</h5>
                            <h6>{gender}</h6>
                            <h6>{age}</h6>
                            <p>{description}</p> */}
                            <img className='accuseCharCardImage' src={imgUrl} alt="pic"/>
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
                            <button onClick={this.question}>Question Suspect</button>
                        </div>

                        <div className="questionSus">
                            {
                                this.state.canQuestion
                                ?
                                    name !== killer
                                    ?
                                    <h5>{this.props.alibiTxt}</h5>
                                    :
                                    <h5>{this.props.guiltyTxt}</h5>
                                :
                                <h5>You need to find the clue</h5>
                                    
                            }
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default withClue(Character)