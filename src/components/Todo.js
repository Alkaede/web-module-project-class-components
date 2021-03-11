import React from 'react';

const List = props => {
  return(
    // todo name in ternary operator to see if its completed
    // if completed then it becomes item.completed in css file
    <div 
      onClick={()=> props.toggleComplete(props.todo.id)} 
      className={`item${props.todo.completed? ' completed' : ''}`}
    >
      <p>{props.todo.task}</p>
    </div>
  )
}

export default List