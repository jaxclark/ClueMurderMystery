import React, {Component} from 'react'
import CluesListContainer from './AllCluesList'
import { withClue } from '../context/ClueProvider'

class Game extends Component {
    constructor(){
        super()
        this.state = {
            suspectName: '',
            tutorial: 'main',
            toggle1: false,
            toggle2: false,
            toggle3: false,
            toggle4: false,
            toggle5: false,
            toggle6: false,
            toggle7: false,
            toggle8: false,
            toggle9: false,
            toggle10: false,
            toggle11: false

        }
    }

    handleClick = e => {
        e.preventDefault()
        this.setState({suspectName: e.target.value})
        this.props.updateClickCount()
        if(this.props.dead === true){
            this.props.history.push('/gameOver')
        }
        // const interviewSuspect = this.props.characters.find((char => {char }))
    }

    handleTutorialToggle = e => {
        if(e.target.value === 'tutorial'){
            this.setState({tutorial: 'tutorial'})
        } else {
            this.setState({tutorial: 'play'})
        }
    }

    handleClueToggle1 = e => {
        this.setState(prev => {
            return {toggle1: !prev.toggle1}
        })
    }
    handleClueToggle2 = e => {
        this.setState(prev => {
            return {toggle2: !prev.toggle2}
        })
    }
    handleClueToggle3 = e => {
        this.setState(prev => {
            return {toggle3: !prev.toggle3}
        })
    }
    handleClueToggle4 = e => {
        this.setState(prev => {
            return {toggle4: !prev.toggle4}
        })
    }
    handleClueToggle5 = e => {
        this.setState(prev => {
            return {toggle5: !prev.toggle5}
        })
    }
    handleClueToggle6 = e => {
        this.setState(prev => {
            return {toggle6: !prev.toggle6}
        })
    }
    handleClueToggle7 = e => {
        this.setState(prev => {
            return {toggle7: !prev.toggle7}
        })
    }
    handleClueToggle8 = e => {
        this.setState(prev => {
            return {toggle8: !prev.toggle8}
        })
    }
    handleClueToggle9 = e => {
        this.setState(prev => {
            return {toggle9: !prev.toggle9}
        })
    }
    handleClueToggle10 = e => {
        this.setState(prev => {
            return {toggle10: !prev.toggle10}
        })
    }
    handleClueToggle11 = e => {
        this.setState(prev => {
            return {toggle11: !prev.toggle11}
        })
    }

    render() {
        return(
            <div className='gameDiv'>
                {this.state.tutorial === 'main' ?
                <div className='gameTutorial'>
                    <h1 className='gameTutorialHeader'>Would you like to read the tutorial?</h1>
                    <button onClick={this.handleTutorialToggle} value='tutorial' >Yes</button>
                    <button onClick={this.handleTutorialToggle} value='play' >No</button>
                </div>
                : this.state.tutorial === 'tutorial' ?
                <div style={{border: '1px solid black', backgroundColor: 'lightblue', margin: '40px 0px 0px 0px'}}>
                    <h3>Tutorial info</h3>
                    <button onClick={this.handleToggle} value='play' >Play</button>
                </div>
                :
                <div style={{display: 'none'}}>
                </div>
                }<form className='gameForm'>
                    <button onClick={this.handleClick} name='Miss Scarlet' value='Miss Scarlet' className='gameInterviewButton'>Miss Scarlet</button>
                    <button onClick={this.handleClick} name='Colonel Mustard' value='Colonel Mustard' className='gameInterviewButton' >Colonel Mustard</button>
                    <button onClick={this.handleClick} name='Mrs. White' value='Mrs. White' className='gameInterviewButton'>Mrs. White</button>
                    <button onClick={this.handleClick} name='Mr. Green' value='Mr. Green' className='gameInterviewButton'>Mr. Green</button>
                    <button onClick={this.handleClick} name='Mrs. Peacock' value='Mrs. Peacock' className='gameInterviewButton'>Mrs. Peacock</button>
                    <button onClick={this.handleClick} name='Professor Plum' value='Professor Plum' className='gameInterviewButton'>Professor Plum</button>
                </form>
                <div>{`Interview Suspect: ${this.state.suspectName}`}</div>
                <div className='gameClueDiv'>
                   {this.state.toggle1 ? 
                        <div className='gameClueDivSHOW-1' onClick={this.handleClueToggle1}>
                            <div>SHOW INFO 1</div>
                        </div>
                        :
                        <div className='gameClueDivHIDE-1' onClick={this.handleClueToggle1}>
                            <div>HIDE INFO 1</div>
                        </div>   
                    }
                    {this.state.toggle2 ? 
                        <div className='gameClueDivSHOW-2' onClick={this.handleClueToggle2}>
                            <div>SHOW INFO 2</div>
                        </div>
                        :
                        <div className='gameClueDivHIDE-2' onClick={this.handleClueToggle2}>
                            <div>HIDE INFO 2</div>
                        </div>   
                    }
                    {this.state.toggle3 ? 
                        <div className='gameClueDivSHOW-3' onClick={this.handleClueToggle3}>
                            <div>SHOW INFO 3</div>
                        </div>
                        :
                        <div className='gameClueDivHIDE-3' onClick={this.handleClueToggle3}>
                            <div>HIDE INFO 3</div>
                        </div>   
                    }
                    {this.state.toggle4 ? 
                        <div className='gameClueDivSHOW-4' onClick={this.handleClueToggle4}>
                            <div>SHOW INFO 4</div>
                        </div>
                        :
                        <div className='gameClueDivHIDE-4' onClick={this.handleClueToggle4}>
                            <div>HIDE INFO 4</div>
                        </div>   
                    }
                    {this.state.toggle5 ? 
                        <div className='gameClueDivSHOW-5' onClick={this.handleClueToggle5}>
                            <div>SHOW INFO 5</div>
                        </div>
                        :
                        <div className='gameClueDivHIDE-5' onClick={this.handleClueToggle5}>
                            <div>HIDE INFO 5</div>
                        </div>   
                    }
                    {this.state.toggle6 ? 
                        <div className='gameClueDivSHOW-6' onClick={this.handleClueToggle6}>
                            <div>SHOW INFO 6</div>
                        </div>
                        :
                        <div className='gameClueDivHIDE-6' onClick={this.handleClueToggle6}>
                            <div>HIDE INFO 6</div>
                        </div>   
                    }
                    {this.state.toggle7 ? 
                        <div className='gameClueDivSHOW-7' onClick={this.handleClueToggle7}>
                            <div>SHOW INFO 7</div>
                        </div>
                        :
                        <div className='gameClueDivHIDE-7' onClick={this.handleClueToggle7}>
                            <div>HIDE INFO 7</div>
                        </div>   
                    }
                    {this.state.toggle8 ? 
                        <div className='gameClueDivSHOW-8' onClick={this.handleClueToggle8}>
                            <div>SHOW INFO 8</div>
                        </div>
                        :
                        <div className='gameClueDivHIDE-8' onClick={this.handleClueToggle8}>
                            <div>HIDE INFO 8</div>
                        </div>   
                    }
                    {this.state.toggle9 ? 
                        <div className='gameClueDivSHOW-9' onClick={this.handleClueToggle9}>
                            <div>SHOW INFO 9</div>
                        </div>
                        :
                        <div className='gameClueDivHIDE-9' onClick={this.handleClueToggle9}>
                            <div>HIDE INFO 9</div>
                        </div>   
                    }
                    {this.state.toggle10 ? 
                        <div className='gameClueDivSHOW-10' onClick={this.handleClueToggle10}>
                            <div>SHOW INFO 10</div>
                        </div>
                        :
                        <div className='gameClueDivHIDE-10' onClick={this.handleClueToggle10}>
                            <div>HIDE INFO 10</div>
                        </div>   
                    }{this.state.toggle11 ? 
                        <div className='gameClueDivSHOW-11' onClick={this.handleClueToggle11}>
                            <div>SHOW INFO 11</div>
                        </div>
                        :
                        <div className='gameClueDivHIDE-11' onClick={this.handleClueToggle11}>
                            <div>HIDE INFO 11</div>
                        </div>   
                    }
                </div>
                <div className='gameInterviewSuspect'>{`Interview Suspect: ${this.state.suspectName}`}</div>
                <CluesListContainer />
            </div>
        )
    }
}

export default withClue(Game)