import React, {Component} from 'react'
import {withClue} from '../context/ClueProvider' 


class Accusation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            murderer: '',
            weapon: ''
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
        } else {
        this.props.guess(this.state.murderer, this.stateweapon)}
    }

    
    render() {
    return (
        <form onSubmit={this.handleSubmit} >
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
    )}
}






export default withClue(Accusation)