import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {withClue} from '../context/ClueProvider';

class Navbar extends Component {
    constructor(){
        super()
    }
    render() {

        return(
            <div id='Navbar'>
                <NavLink exact to='/' className='Navbar-link' activeClassName='Navbar-link-active'>
                    <img src='' className='logo' alt='logo' />
                </NavLink>
                <NavLink to='/game' className='Navbar-link' activeClassName='Navbar-link-active'>Game</NavLink>
                <NavLink exact to='/characters' className='Navbar-link' activeClassName='Navbar-link-active'>Characters</NavLink>
                <NavLink exact to='/weapons' className='Navbar-link' activeClassName='Navbar-link-active'>Weapons</NavLink>
                <NavLink exact to='/accuse-suspect' className='Navbar-link' activeClassName='Navbar-link-active'>Make Accusation</NavLink>
            </div>
        )
    }
}

export default withClue(Navbar)