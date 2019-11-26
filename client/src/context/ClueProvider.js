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
            killer: '',
            name: '',
            title: '',
            hasWon: false,
            clickedCount: 0,
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
        })
    }

    // function so player can set their title and name
    chooseName = (name, title) => {
        this.setState({name: name})
        this.setState({title: title})
    }

    guess = (murderer, weapon) => {
        if (murderer === this.state.killer
            && weapon === this.state.murderWeapon.name
            ) {
                this.setState({
                    hasWon: true
                })
            console.log("Player Won")
            
        } else {
            console.log("Player lost")
            // whatever needs to happen for a loss
        }
    }

    startAgain = () => {
        this.setState({
            clues: [],
            weapons: [],
            characters: [],
            murderWeapon: '',
            killer: '',
            name: '',
            title: '',
            hasWon: false
        })
        this.getAll()
        this.props.history('/gameOver')
    }
    // updateCluesList = () => {
        //not in use currently, will come in later for finding clues and adding to clues list
        //for now using a getAll to populate the clues list
    // }

    updateClickCount = () => {
        this.setState({clickedCount: this.state.clickedCount + 1})
    }
    
    render() {
        console.log(this.state.clickedCount)
        return (
            <ClueContext.Provider
                value = {{
                    ...this.state,
                    getAll: this.getAll,
                    chooseWeapon: this.chooseWeapon,
                    chooseName: this.chooseName,
                    guess: this.guess,
                    startAgain: this.startAgain,
                    updateClickCount: this.updateClickCount
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