import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'

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

  clearHandler = () => {
    this.setState({
      list: this.state.list.filter(i => {
        return !i.completed
      })
    })
  }

  toggleComplete = (iiD) => {
    this.setState({
      list: this.state.list.map(item => {
        if(item.id === iiD){
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>ToDo List MVP:</h2>
        </div>
        <TodoList todoList={this.state.list} clearComplete={this.clearHandler} toggleComplete={this.toggleComplete}/>
        {/* passing the addList to the form */}
        <TodoForm addList={this.addList} />
      </div>
    );
  }
}

export default App;
