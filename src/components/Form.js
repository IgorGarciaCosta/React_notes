import React from 'react'

class Form extends React.Component{
  constructor(){
    super()
    this.state = {
      firstName :"",
      lastName: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value,//seta cada elemento do state com o que estiver na inputbox
    })
  }

  render(){
    return(
      <form>
        <input type="text" values={this.state.firstName} name="firstName" placeholder ="Fisrt Name" onChange={this.handleChange}/>
        <br/>
        <input type="text" values={this.state.lastName} name="lastName"  placeholder ="Last Name" onChange={this.handleChange}/>
        <h1>{this.state.firstName}  {this.state.lastName}</h1>
      </form>
    )
  }
}

export default Form
