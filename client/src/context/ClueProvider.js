import React, {Component} from 'react'
import axios from 'axios'

const ClueContext = React.createContext()

class ClueProvider extends Component {
    constructor() {
        super()
        this.state = {
            clues: [],
            foundClues: [],
            weapons: [],
            characters: [],
            murderWeapon: '',
            killer: '',
            name: '',
            title: '',
            hasWon: false,
            clickedCount: 0,
            dead: false,
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

    saveClue = (myClue) => {
        this.setState(prevState => ({
            foundClues:[...prevState.foundClues, myClue]
        }))
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
            // this.props.history.push('/gameOver')
            // whatever needs to happen for a loss
        }
    }
    handleRestartClick = () => {
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
        
    }
    // updateCluesList = () => {
        //not in use currently, will come in later for finding clues and adding to clues list
        //for now using a getAll to populate the clues list
    // }

    updateClickCount = () => {
        this.setState({clickedCount: this.state.clickedCount + 1})
        if(this.state.clickedCount < 7) {
            console.log('safe')
        } else if(this.state.clickedCount >= 7 && this.state.clickedCount < 12) {
            let randroll = Math.floor(Math.random() * 20)
            if(randroll === 0){
                this.setState({dead: true})
            }
            console.log('rand: ', + randroll)
            console.log('less safe')
        } else if(this.state.clickedCount >= 12 && this.state.clickedCount < 20) {
            let randroll = Math.floor(Math.random() * 14)
            if(randroll === 0){
                this.setState({dead: true})
            }
            console.log('rand: ', + randroll)
            console.log('unsafe')
        } else if(this.state.clickedCount >= 20) {
            let randroll = Math.floor(Math.random() * 8)
            if(randroll === 0){
                this.setState({dead: true})
            }
            console.log('rand: ', + randroll)
        }
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
                    updateClickCount: this.updateClickCount,
                    handleRestartClick: this.handleRestartClick,
                    saveClue: this.saveClue
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