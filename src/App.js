import React, {useState, useEffect} from 'react';
import './App.css';
import Todos from './components/Todos';


function App() {
  let [todos, setTodos] = useState([
    {
      id:1, 
    title: 'take out the trash',
     completed: false
    },
    {
      id:2, 
    title: 'Dinner with wife',
    completed: false
  },
    {
      id:3, 
    title: 'Meeting with boss',
    completed: false
  },
  ]);

  return (
    <div className="App">
     <Todos />
      </div>
  );  
}

export default App;
