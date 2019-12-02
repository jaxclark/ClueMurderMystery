import React, {Component} from 'react'
import {withClue} from '../context/ClueProvider' 
import Character from './Character'
import Weapon from './Weapon'


class Accusation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            murderer: '',
            weapon: '',
            count: 3
        }
    }
        
    handleChange = (type, inputName, e) => {
        this.setState ({
            [type]: inputName
        })
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.murderer === '' || this.state.weapon === '') {
            (alert("You must select a murderer and a weapon to proceed"))
        } else if (this.state.murderer === this.props.killer.name && this.state.weapon === this.props.murderWeapon.name) {
            (alert("Winner"))
            this.props.history.push('/gameWon')
        } else {
            console.log(this.props.lostCount)
            if(this.props.lostCount === true){
                alert('You Guessed too Many Times')
                this.props.history.push('/gameOver')
            
            } else {
                alert("Your guess was incorrect!!!")
                this.setState(prevState => ({
                    count: prevState.count -= 1
                }))
            this.props.guess(this.state.murderer, this.state.weapon)
                } 
        }
    }

    
    render() {
        const mappedCharacter = this.props.characters.map((character) => <Character {...character} name={character.name} path={this.props.location.pathname} key={character._id} handleChange={this.handleChange} murderer={this.state.murderer} />)
        const mappedWeapon = this.props.weapons.map((weapon) => <Weapon {...weapon} key={weapon._id}  path={this.props.location.pathname} weapon={this.state.weapon} handleChange={this.handleChange}/>)

        return (
            <div className ="accuseDiv">
                <div className='accuseBtnDiv'>
                    <button className="accuseBtn" onClick={this.handleSubmit}>Submit accusation</button>
                <span className='triesLeft'>Attempts Remaining: {this.state.count}</span>
                </div>
                <div className='ChooseOne'>
                    Select One Character Below
                </div>
                <div className="accusationMap">
                    {mappedCharacter}
                </div>
                <div className='ChooseOne'>
                    Select One Weapon Below
                </div>
                <div className="accusationMap">
                    {mappedWeapon}
                </div>
                 
        </div>
            
    )}
}

export default withClue(Accusation)