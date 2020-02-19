import React from 'react';
import './App.css';
import ComplexList from './components/SimpleList';
import ParentComponent from './components/ParentComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <ComplexList  fluid="md"/>
      
      
      </header>
      
    </div>
  );
}

export default App;
