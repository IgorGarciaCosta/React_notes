import React from 'react'

class ApiTest extends React.Component{
  constructor(){
    super()
    this.state = {
      loading: false
      character:{}
    }
  }

  componentDidMount(){
      this.setState({loading:true})
      fetch("http://swapi.com/api/people/1")
        .then(response=>response.json())
        .then(data=>{
          this.setState({
            character: data,
            loading:false
          })
        })
  }

  render(){
    const text = this.state.loading?"LOADING":this.state.character.name
    return(
      <div>
          <p>{text}</p>
      </div>
    )
  }
}


export default ApiTest
