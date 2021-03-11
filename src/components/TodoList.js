import React from 'react';
import List from './Todo';


const TodoList = props => {
  return (
    <div className='proper-list'>
      {props.todoList.map(item => (
        <List key={item.id} todo={item}/>
      ))}
    </div>
  )
}

export default TodoList