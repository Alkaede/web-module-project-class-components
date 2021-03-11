import React from 'react';

const List = props => {
  return(
    <div className={`item${props.todo.completed? ' completed' : ''}`}>
      <p>{props.todo.task}</p>
    </div>
  )
}

export default List