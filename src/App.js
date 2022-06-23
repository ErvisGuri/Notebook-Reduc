import React, { useEffect, useState } from 'react';
import './App.css';

//Importing Components
import Notebook from './components/Notebook/Notebook';
import NotebookList from './components/NotebookList/NotebookList';
import { useSelector } from "react-redux";
import { selectNotes } from "./features/noteSlice";


function App() {
  const [contentVisible, setContentVisible] = useState(false);
  const [selectedNote, setSelectNote] = useState(0);


  const noteList = useSelector(selectNotes)

  console.log(noteList)

  const foundNotes = noteList.filter((not) => not.id === selectedNote);

  const handleNotVisible = () => {
    setContentVisible(false);
  };

  const handleVisible = () => {
    setContentVisible(true);
  };

  const onChangeContent = (e) => {
    setSelectNote(e.target.value);
  };

  return (
    <div className="App">
      <div className='noteList_container'>
        <NotebookList foundNotes={foundNotes} onChangeContent={onChangeContent} handleVisible={handleVisible} />
      </div>
      <div className='note_container'>
        <h1 className='noteHeader_container'>My Note</h1>
        {noteList.map((notes, i) =>
          <Notebook handleNotVisible={handleNotVisible} notes={notes} key={i} />)}
      </div>
    </div>
  );
}

export default App;
