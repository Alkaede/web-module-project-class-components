import React from 'react';

const List = props => {
  return(
    <div onClick={()=> props.toggleComplete(props.todo.id)} className={`item${props.todo.completed? ' completed' : ''}`}>
      <p>{props.todo.task}</p>
    </div>
  )
}

export default List