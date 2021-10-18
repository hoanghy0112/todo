import './App.css';
import Todo from './Todo/Todo.js'
import React from 'react'

function App() {
  console.log(<Todo><div></div></Todo>)
  return (
    <React.Fragment>
      <Todo />
    </React.Fragment>
  );
}

export default App;
