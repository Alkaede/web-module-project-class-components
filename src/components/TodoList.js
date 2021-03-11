import React from 'react';
import List from './Todo';


const TodoList = props => {
  return (
    <div className='proper-list'>
      {/* getting the props from app.js and mapping the list to create a new array to display the list from todo.js */}
      {props.todoList.map(item => (
        <List key={item.id} todo={item} toggleComplete={props.toggleComplete}/>
      ))}
      <button onClick={props.clearComplete}>
        Clear Completed
        </button>
    </div>
  )
}

export default TodoList