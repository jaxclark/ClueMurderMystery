import React, {Component} from 'react'
import axios from 'axios'

const ClueContext = React.createContext()

class ClueProvider extends Component {
    constructor() {
        super()
        this.state = {
            clues: [],
            weapons: [],
            characters: []
        }
    }

    

    getAll = () => {
        axios.get('/weapon')
            .then(res => {
                this.setState({
                    weapons:res.data
                })
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

    render() {
        return (
            <ClueContext.Provider
                value = {{
                    clues: this.state.clues,
                    weapons: this.state.weapons,
                    characters: this.state.characters,
                    getAll: this.getAll
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