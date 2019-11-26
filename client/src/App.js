import React from 'react'
import { Route, Switch } from 'react-router-dom'

// my components
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Game from './components/Game'
import Accusation from './components/Accusation'
import CharacterList from './components/CharacterList'
import WeaponList from './components/WeaponList'
import GameOver from './components/GameOver'
import './styles.css'
import GameWon from './components/GameWon'


const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route path='/game' component={Game} />
                <Route path='/characters' component={CharacterList} />
                <Route path='/weapons' component={WeaponList} />
                <Route path='/accuse-suspect' component={Accusation} />
                <Route path='/gameOver' component={GameOver} />
                <Route path='/gameWon' component={GameWon} />
            </Switch>
            
        </div>
    )
}

export default App