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
            accuseCount: 2,
            lostCount: false,
            needTutorial: true,
            hideClues: [false, false, false, false, false, false, false, false, false, false, false],
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
                this.chooseKiller()
            })

    }

    chooseWeapon = () => {
        const weaponIndex = Math.floor(Math.random()*(this.state.weapons.length))
        this.setState({
            murderWeapon: this.state.weapons[weaponIndex]
        })
    }

    chooseKiller = () => {
        const killerIndex = Math.floor(Math.random()*(this.state.characters.length))
        console.log(killerIndex)
        this.setState({
            killer: this.state.characters[killerIndex]
        })
    }

    popWeaponFromClues = () => {
        const newClues = this.state.clues.filter(weapon => (weapon.name !== this.state.murderWeapon.name))
        this.setState({clues: newClues})
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
            this.setState(prevState =>({
                accuseCount: prevState.accuseCount -= 1
            }))
            if (this.state.accuseCount === 1) {
               
                this.setState({
                    lostCount: true
                }) 
                
            }
        }
    }
    handleRestartClick = () => {
        this.setState({
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
            accuseCount: 2,
            lostCount: false,
            needTutorial: true,
        })
        this.getAll()
        
    }
    // updateCluesList = () => {
        //not in use currently, will come in later for finding clues and adding to clues list
        //for now using a getAll to populate the clues list
    // }

    updateClickCount = () => {
        this.setState({clickedCount: this.state.clickedCount + 1})
        if(this.state.clickedCount < 9) {
            console.log('safe')
        } else if(this.state.clickedCount >= 9 && this.state.clickedCount < 14) {
            let randroll = Math.floor(Math.random() * 20)
            if(randroll === 0){
                this.setState({dead: true})
            }
            console.log('rand: ', + randroll)
            console.log('less safe')
        } else if(this.state.clickedCount >= 14 && this.state.clickedCount < 20) {
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

    handleTutorial = () => {
        this.setState({needTutorial: false})
    }

    handleHideClues = (clueNum) => {
        const currentArr = this.state.hideClues
        // console.log(`firstArr: ${currentArr}`)
        const isHidden = !this.state.hideClues[clueNum]
        currentArr.splice(clueNum, 1, isHidden)
        // console.log(`secondeArr: ${currentArr}`)
        // console.log(`clueNum: ${clueNum}`)
        // console.log(`isHidden: ${isHidden}`)
        this.setState(() => ({
            hideClues: currentArr
        }))
    }
    
    render() {
        console.log(this.state.clickedCount)
        return (
            <ClueContext.Provider
                value = {{
                    ...this.state,
                    getAll: this.getAll,
                    chooseWeapon: this.chooseWeapon,
                    popWeaponFromClues: this.popWeaponFromClues,
                    chooseName: this.chooseName,
                    saveClue: this.saveClue,
                    guess: this.guess,
                    handleRestartClick: this.handleRestartClick,
                    updateClickCount: this.updateClickCount,
                    handleTutorial: this.handleTutorial,
                    handleHideClues: this.handleHideClues,
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