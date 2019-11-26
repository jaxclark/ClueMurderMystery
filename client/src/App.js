import React from 'react'
import { Route, Switch } from 'react-router-dom'

// my components
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Game from './components/Game'
import Accusation from './components/Accusation'
import CharacterList from './components/CharacterList'
import WeaponList from './components/WeaponList'

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
            </Switch>
        </div>
    )
}

export default App