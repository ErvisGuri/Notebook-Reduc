import React from 'react';
import './App.css';

//Importing Components
import Notebook from './components/Notebook/Notebook';
import NotebookList from './components/NotebookList/NotebookList';

function App() {
  return (
    <div className="App">
      <div className='noteList_container'>
        <NotebookList />
      </div>
      <div className='note_container'>
        <h1 className='noteHeader_container'>My Note</h1>
        <Notebook />
        <Notebook />
        <Notebook />
        <Notebook />
        <Notebook />
        <Notebook />
        <Notebook />
      </div>

    </div>
  );
}

export default App;
