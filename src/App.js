import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todoList = [
  {
    task: 'Setup todo list',
    id: '123',
    completed: false,
  },
  {
    task: 'Actually get the app to work',
    id: '124',
    completed: false,
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // why is the super crossed out in my editor???
  constructor(){
    super();
    this.state = {
      list: todoList
    }
  }

  addList = (thing) => {
    this.setState({
      list:
      [
        ...this.state.list,
        {
          task: thing,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }



  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>ToDo List MVP:</h2>
        </div>
        <TodoList todoList={this.state.list}/>
        {/* passing the addList to the form */}
        <TodoForm addList={this.addList}/>
      </div>
    );
  }
}

export default App;
