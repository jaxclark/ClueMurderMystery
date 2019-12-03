import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {withClue} from '../context/ClueProvider';
// import Logo from '../images/MM.png'
import LogoWide from '../images/MM-wide.png'

import song from '../sounds/dark-winter.mp3'

class Navbar extends Component {
    // constructor(){
    //     super()
    // }

    componentDidMount(){
        const themeSong = new Audio(song)
        themeSong.play()
}
    render() {

        // let prevScrollpos = window.pageYOffset;
        // window.onscroll = function() {
        // let currentScrollPos = window.pageYOffset;
        //     if (prevScrollpos > currentScrollPos) {
        //         document.getElementById("Navbar").style.top = "0";
        //     } else {
        //         document.getElementById("Navbar").style.top = "-50px";
        //     }
        //     prevScrollpos = currentScrollPos;
        // }

        return(
            <div>
                {this.props.murderWeapon === '' ? 
                    <div id='NavbarBare'>
                        <NavLink exact to='/' className='Navbar-link' activeClassName='Navbar-link-active'>
                            <img src={LogoWide} className='logoWide' alt='logo' />
                        </NavLink>
                    </div>
                :
                <div id='Navbar'>
                    <NavLink exact to='/' className='Navbar-link' activeClassName='Navbar-link-active'>
                        <img src={LogoWide} className='logo' alt='logo' />
                    </NavLink>
                    <NavLink to='/game' className='Navbar-link' activeClassName='Navbar-link-active'>Game</NavLink>
                    <NavLink exact to='/characters' className='Navbar-link' activeClassName='Navbar-link-active'>Characters</NavLink>
                    <NavLink exact to='/weapons' className='Navbar-link' activeClassName='Navbar-link-active'>Weapons</NavLink>
                    <NavLink exact to='/accuse-suspect' className='Navbar-link' activeClassName='Navbar-link-active'>Make Accusation</NavLink>
                </div>
                }
            </div>
        )
    }
}

export default withClue(Navbar)