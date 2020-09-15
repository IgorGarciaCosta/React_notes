import React from 'react'
import Header from './components/Header'
import MainComponent from './components/TodoItem'


function App(){
    return(
      <div>
        <Header/>
        <div className="todo-list" >
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
        </div>

      </div>

    )
}

export default App
