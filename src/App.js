import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }])
  return (
    <div className="App">
     <Todos />
      </div>
  );
}

export default App;
