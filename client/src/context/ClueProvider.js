import React, {Component} from 'react'
import axios from 'axios'

const ClueContext = React.createContext()

class ClueProvider extends Component {
    constructor() {
        super()
        this.state = {
            clues: [],
            weapons: [],
            characters: [],
            murderWeapon: '',
            killer: 'Mrs Peacock',
            name: '',
            title: '',
        }
    }

    getAll = () => {
    
        axios.get('/weapon')
            .then(res => {
                this.setState({
                    weapons:res.data,
                })
                this.chooseWeapon()
            })
            .catch(err => console.log(err))
        
        axios.get('/clue')
            .then(res => {
                this.setState({
                    clues:res.data
                })
            })
            .catch(err => console.log(err))
        
        axios.get('/character')
            .then(res => {
                this.setState({
                    characters:res.data
                })
            })

    }

    chooseWeapon = () => {
        const weaponIndex = Math.floor(Math.random()*(this.state.weapons.length -1))
        this.setState({
            murderWeapon: this.state.weapons[weaponIndex]
        })}

    chooseName = (name, title) => {
        this.setState({name: name})
        this.setState({title: title})
    }

    guess = (murderer, weapon) => {
        if (murderer === this.state.killer
            && weapon === this.state.murderWeapon.name
            ) {
            // whatever needs to happen for a win
            console.log("Player Won")
            
        } else {
            console.log("Player lost")
            // whatever needs to happen for a loss
        }
    }
    
    render() {
        console.log(this.state.title)
        console.log(this.state.name)
        return (
            <ClueContext.Provider
                value = {{
                    ...this.state,
                    getAll: this.getAll,
                    chooseWeapon: this.chooseWeapon,
                    chooseName: this.chooseName,
                    guess: this.guess
                }}>
                {this.props.children}
            </ClueContext.Provider>

        )
    }

}

export default ClueProvider

export const withClue = C => props => (
    <ClueContext.Consumer>
        {value => <C {...value} {...props} />}
    </ClueContext.Consumer>
)