import React, {useState, useEffect} from 'react';
import './App.css';
import Todos from './components/Todos';


function App() {
  const [todos, setTodos] = useState([
    {id:1, 
    title: 'take out the trash'},
    {id:2, 
    title: 'take out the trash'},
    {id:3, 
    title: 'pay the bills'},
    
  ]);
  return (
    <div className="App">
     <Todos />
      </div>
  );  
}

export default App;
