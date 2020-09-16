import React from 'react'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import todosData from './components/todosData'


function App(){
    const todoItems = todosData.map(item => <TodoItem key = {item.id} item = {item}/>)

    return(
      <div>
        <Header/>
        <div className="todo-list" >
            {todoItems}
        </div>

      </div>

    )
}

export default App
