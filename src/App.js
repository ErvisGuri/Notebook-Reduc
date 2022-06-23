import React, { useState } from 'react';
import './App.css';

//Importing Components
import Notebook from './components/Notebook/Notebook';
import NotebookList from './components/NotebookList/NotebookList';
import { useSelector } from "react-redux";
import { selectNotes } from "./features/noteSlice";


function App() {
  const [contentVisible, setContentVisible] = useState(false);

  const noteList = useSelector(selectNotes)

  const handleNotVisible = () => {
    setContentVisible(false);
  };

  const handleVisible = () => {
    setContentVisible(true);
  };

  return (
    <div className="App">
      <div className='noteList_container'>
        <NotebookList handleVisible={handleVisible} />
      </div>
      <div className='note_container'>
        <h1 className='noteHeader_container'>My Note</h1>
        {noteList.map((notes, i) =>
          <Notebook onClick={handleNotVisible} notes={notes} key={i} />)}
      </div>

    </div>
  );
}

export default App;
