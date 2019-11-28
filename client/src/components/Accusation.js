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
        } else if (this.state.murderer === this.props.killer && this.state.weapon === this.props.murderWeapon.name) {
            (alert("Winner"))
            this.props.history.push('/gameWon')
        } else {
            console.log(this.props.lostCount)
            if(this.props.lostCount === true){
                alert('You Guessed too Many Times')
                this.props.history.push('/gameOver')
            
            } else {
                alert("Your guess was incorrect!!!")
            this.props.guess(this.state.murderer, this.state.weapon)
                } 
        }
    }


    
    render() {
        const mappedCharacter = this.props.characters.map((character) => <Character {...character} name={character.name} path={this.props.location.pathname} key={character._id} handleChange={this.handleChange} murderer={this.state.murderer} />)
        const mappedWeapon = this.props.weapons.map((weapon) => <Weapon {...weapon} key={weapon._id}  path={this.props.location.pathname} weapon={this.state.weapon} handleChange={this.handleChange}/>)

        return (
            <div className ="accuseDiv">
                <button className="accuseBtn" onClick={this.handleSubmit}>Submit accusation</button>
                <div className="accusationMap">
                    {mappedCharacter}
                    {mappedWeapon}
                </div>
                
                
                
                {/* <form onSubmit={this.handleSubmit} style={{marginTop: '100px'}}>
                    <select name="murderer" onChange={this.handleChange}>
                    <option name="murderer" value="choose">Who is the murderer?</option>
                    <option name="murderer"  value="Miss Scarlet">Miss Scarlet</option>
                    <option name="murderer" value="Colonel Mustard" >Colonel Mustard</option>
                    <option name="murderer" value="Mrs White">Mrs White</option>
                    <option name="murderer" value="Mr. Green">Mr. Green</option>
                    <option name="murderer" value="Mrs Peacock" >Mrs Peacock</option>
                </select>
                <select name="weapon" onChange={this.handleChange} >
                    <option name="weapon" value="choose">What was the weapon?</option>
                    <option name="weapon" value="Candlestick">Candlestick</option>
                    <option name="weapon" value="Dagger">Dagger</option>
                    <option name="weapon" value="Lead Pipe">Lead Pipe</option>
                    <option name="weapon" value="Revolver">Revolver</option>
                    <option name="weapon" value="Rope">Rope</option>
                </select>
                <button>Submit Guess</button>
            </form> */}
        </div>
            
    )}
}






export default withClue(Accusation)