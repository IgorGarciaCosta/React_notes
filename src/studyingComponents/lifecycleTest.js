import React from 'react'

class App extends React.Component{

  constructor(){
    super()
    this. state = {}
  }

  static getDerivedStateFromProps(props, state){
    //return the new, updated state upon the props
  }

  getSnapshotBeforeUpdate(){
    //create a backup of the current way things are
  }

  componentDidMount(){

  }


  shouldComponentUpdotte(nextProps, nextState){
      //ret true is want to update and false if nt
  }

  componentWillUnmount(){

  }

  render(
    return{
      <div>

      </div>
    }
  )
}

export default App
