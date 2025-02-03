import React from 'react';
import Greeting from './components/greetings';
import './App.css';

function App() {
  const data = "Hello from Parent";

  return (
    <div className="App">
      <Greeting />
    </div>
  );
}

export default App;