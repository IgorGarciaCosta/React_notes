import React from 'react'

function Conditional(props){
  return{
    <h1>Nope</h1>
  }
}


class App extends React.Component{

  constructor(){
    super()
    this.state = {
      isLogged = false;
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({prevState=>{
      isLogged: !prevState.isLogged
    }})
  }


  render(
    let butonText = this.state.isLogged? "LOG OUT":"LOG IN"
    let displayText = this.state.isLogged? "LOGED IN":"LOGED OUT"
    return{
      <div>
        <button onclick= {
          this.handleClick
        }>{butonText}</button>
        <h1>{displayText}</h1>

      </div>
    }
  )
}


export default App
