import React from 'react';

class TodoForm extends React.Component{
  // constructor with state
  constructor(){
    super();
    this.state = {
      todo: ''
    }
  }

  changeHandler = e => {
    this.setState({todo: e.target.value})
  };

  submitHandler = (e) =>{
    e.preventDefault();
    this.props.addList(this.state.todo);
  }


  render(){
    return (
      <form onSubmit={this.submitHandler}>
        <input 
          type='text' 
          placeholder='type something' 
          name='list' 
          onChange={this.changeHandler} 
          value={this.state.todo}
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default TodoForm