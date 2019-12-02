import React, {Component} from 'react'
import { withClue } from '../context/ClueProvider'


class Game extends Component {
    constructor(){
        super()
        this.state = {
            tutorial: 'main',
            interviewToggle: false,
            openClues: [false, false, false, false, false, false, false, false, false,false, false],
            clueName: '',
            clueDesc: ''
        }
    }

    handleTutorialToggle = e => {
        this.props.popWeaponFromClues()
        if(e.target.value === 'tutorial'){
            this.setState({tutorial: 'tutorial'})
        } else {
            this.setState({tutorial: 'play'})
            this.props.handleTutorial()
        }
    }

    handleClueToggle = (clueNum) => {
        const currentArr = this.state.openClues
        const isOpen = !this.state.openClues[clueNum]
        currentArr.splice(clueNum, 1, isOpen)
        this.setState(() => ({
            openClues: currentArr
        }))
        this.props.updateClickCount()
        if(this.props.dead === true){
            this.props.history.push('/gameOver')
        }
    }

    addFoundClue = (inputClue, idName) => {
        
        this.props.saveClue(inputClue)
        this.props.updateClickCount()
        if(this.props.dead === true){
            this.props.history.push('/gameOver')
        }
        
        let foundDiv = document.getElementById(idName)
        // let secondDiv = document.getElementById(secondId)
        console.log(foundDiv)
        foundDiv.classList.add('hidden')
        // secondDiv.classList.add('hidden')   
    }
   

    render() {
        
        return(
            <div className='gameDiv'>
                {this.props.needTutorial
                ?
                <div>
                    {this.state.tutorial === 'main' 
                    ?
                        <div className='gameTutorial'>
                            <h1 className='gameTutorialHeader'>Would you like to read the tutorial?</h1>
                            <button onClick={this.handleTutorialToggle} value='tutorial' className='gameTutorialButton'>Yes</button>
                            <button onClick={this.handleTutorialToggle} value='play' className='gameTutorialButton'>No</button>
                        </div>
                    : 
                        this.state.tutorial === 'tutorial' 
                        ?
                        <div className='gameTutorial'>
                            <h3>Tutorial info</h3>
                            <button onClick={this.handleTutorialToggle} value='play' >Play</button>
                        </div>
                        :
                        null
                    }
                </div>
                :
                    <div className='gameClueDiv'>
                    {this.state.openClues[0] ? 
                            <div id='clue1' className='gameClueDivSHOW-1'>
                                <div className='gameClueTitle'>{this.props.clues[0].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[0].description}</h3>  
                                <button onClick={() => this.addFoundClue(this.props.clues[0], 'clue1')} className='gameAddClueButton'>Gather Evidence</button>                      
                            </div>
                            :
                            <div id='clue1B' className='gameClueDivHIDE-1' onClick={() => this.handleClueToggle(0)}>
                                <div>HIDE INFO 1</div>
                            </div>   
                        }
                        {
                            this.state.openClues[1] ? 
                            <div id='clue2' className='gameClueDivSHOW-2'>
                                <div className='gameClueTitle'>{this.props.clues[1].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[1].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[1], 'clue2')} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue2B' className='gameClueDivHIDE-2' onClick={() => this.handleClueToggle(1)}>
                                <div>HIDE INFO 2</div>
                            </div>   
                        }
                        {this.state.openClues[2] ? 
                            <div id='clue3' className='gameClueDivSHOW-3'>
                                <div className='gameClueTitle'>{this.props.clues[2].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[2].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[2], 'clue3')} className='gameAddClueButton'>Gather Evidence</button>
            
                            </div>
                            :
                            <div id='clue3B' className='gameClueDivHIDE-3' onClick={() => this.handleClueToggle(2)}>
                                <div>HIDE INFO 3</div>
                            </div>   
                        }
                        {this.state.openClues[3] ? 
                            <div id='clue4' className='gameClueDivSHOW-4'>
                                <div className='gameClueTitle'>{this.props.clues[3].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[3].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[3], 'clue4')} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue4B' className='gameClueDivHIDE-4' onClick={() => this.handleClueToggle(3)}>
                                <div>HIDE INFO 4</div>
                            </div>   
                        }
                        {this.state.openClues[4] ? 
                            <div id='clue5' className='gameClueDivSHOW-5'>
                                <div className='gameClueTitle'>{this.props.clues[4].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[4].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[4], 'clue5')} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue5B' className='gameClueDivHIDE-5' onClick={() => this.handleClueToggle(4)}>
                                <div>HIDE INFO 5</div>
                            </div>   
                        }
                        {this.state.openClues[5] ? 
                            <div id='clue6' className='gameClueDivSHOW-6'>
                                <div className='gameClueTitle'>{this.props.clues[5].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[5].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[5], 'clue6')} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue6B' className='gameClueDivHIDE-6' onClick={() => this.handleClueToggle(5)}>
                                <div>HIDE INFO 6</div>
                            </div>   
                        }
                        {this.state.openClues[6] ?
                            <div id='clue7' className='gameClueDivSHOW-7'>
                                <div className='gameClueTitle'>{this.props.clues[6].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[6].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[6], 'clue7')} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue7B' className='gameClueDivHIDE-7' onClick={() => this.handleClueToggle(6)}>
                                <div>HIDE INFO 7</div>
                            </div>   
                        }
                        {this.state.openClues[7] ? 
                            <div id='clue8' className='gameClueDivSHOW-8'>
                                <div className='gameClueTitle'>{this.props.clues[7].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[7].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[7], 'clue8')} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue8B' className='gameClueDivHIDE-8' onClick={() => this.handleClueToggle(7)}>
                                <div>HIDE INFO 8</div>
                            </div>   
                        }
                        {this.state.openClues[8] ? 
                            <div id='clue9' className='gameClueDivSHOW-9'>
                                <div className='gameClueTitle'>{this.props.clues[8].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[8].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[8], 'clue9')} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue9B' className='gameClueDivHIDE-9' onClick={() => this.handleClueToggle(8)}>
                                <div>HIDE INFO 9</div>
                            </div>   
                        }
                        {this.state.openClues[9] ? 
                            <div id='clue10' className='gameClueDivSHOW-10'>
                                <div className='gameClueTitle'>{this.props.clues[9].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[9].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[9], 'clue10')} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue10B' className='gameClueDivHIDE-10' onClick={() => this.handleClueToggle(9)}>
                                <div>HIDE INFO 10</div>
                            </div>   
                        }{this.state.openClues[10] ? 
                            <div id='clue11' className='gameClueDivSHOW-11'>
                                <div className='gameClueTitle'>{this.props.clues[10].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[10].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[10], 'clue11')} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue11B' className='gameClueDivHIDE-11' onClick={() => this.handleClueToggle(10)}>
                                <div>HIDE INFO 11</div>
                            </div>   
                        }
                    </div>
                }
            </div>
        )
    }
}

export default withClue(Game)