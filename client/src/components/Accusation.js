import React, {Component} from 'react'
import {withClue} from '../context/ClueProvider' 
// import Character from './Character'
// import Weapon from './Weapon'

class Accusation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            murderer: '',
            weapon: '',
            className:'accused'
        }
    }
        
    handleChange = e => {
        const { name, value } = e.target

        this.setState ({
            [name]: value
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
                this.props.history.push('/gameOver')
            
            } else {
                alert("Your guess was incorrect!!!")
            this.props.guess(this.state.murderer, this.state.weapon)
                } 
        }
    }


    
    render() {
        // const mappedCharacter = props.characters.map((character) => <Character {...character} key={character._id} onClick={this.handleChange} />)
        // const mappedWeapon = props.weapons.map((weapon) => <Weapon {...weapon} key={weapon._id} onClick={this.handleChange}/>)

        return (
            <div>
                {/* {mappedCharacter}
                {mappedWeapon}
                <button onClick={this.handleSubmit}>Submit accusation</button> */}
                
                <form onSubmit={this.handleSubmit} style={{marginTop: '100px'}}>
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
            </form>
        </div>
            
    )}
}






export default withClue(Accusation)