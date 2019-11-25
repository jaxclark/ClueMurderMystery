import React, {Component} from 'react'
import {withClue} from '../context/ClueProvider' 

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            title: ''
        }
    }

    handleSubmit = (e, name, title) => {
        e.preventDefault()
        this.props.chooseName(name, title)
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return(
         <div>
             <form onSubmit={(e) => this.handleSubmit(e, this.state.name, this.state.title)}> 
                 <select onChange={this.handleChange} name='title' id="title">
                     <option value="chooseTitle">Choose Title</option>
                     <option value='Mr.' >Mr.</option>
                     <option value='Mrs.' >Mrs.</option>
                     <option value='Ms.' >Ms.</option>
                     <option value='Doctor' >Doctor</option>
                     <option value='Professor' >Professor</option>
                     <option value='Reverend' >Reverend</option>
                     <option value='Detective' >Detective</option>
                     <option value='Inspector' >Inspector</option>
                 </select>
                 <input onChange={this.handleChange} value={this.state.name} name='name' type="text" placeholder="Name" />
                 <button>Submit</button>
             </form>
                 <button onClick={this.props.getAll}>Bert</button>
         </div>
        )
    }
}


export default withClue(Main)