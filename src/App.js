import React, { useState } from 'react';
import './App.css';
import { useDispatch } from "react-redux";


//Importing Components
import Notebook from './components/Notebook/Notebook';
import NotebookList from './components/NotebookList/NotebookList';
import { useSelector } from "react-redux";
import { selectNotes } from "./features/noteSlice";
import { updateNote } from "./features/noteSlice";



function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedNote, setSelectedNote] = useState(0);
  const dispatch = useDispatch();
  const noteList = useSelector(selectNotes)

  const onChangeContent = (id) => {
    setSelectedNote(id);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const updatePost = (e) => {
    dispatch(
      updateNote({
        name: e.target.value,
        category: e.target.value,
        date: e.target.value,
        textArea: e.target.value,
      })
    );
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="App">
      <div className='noteList_container'>
        <NotebookList updatePost={updatePost} note={selectedNote} isModalVisible={isModalVisible} showModal={showModal} handleCancel={handleCancel} onChangeContent={onChangeContent} />
      </div>
      <div className='note_container'>
        <h1 className='noteHeader_container'>My Note</h1>
        {noteList.filter((not) => not.id === selectedNote)
          .map((note, i) =>
            <Notebook updatePost={updatePost} showModal={showModal} handleCancel={handleCancel} value={note.id} checked={selectNotes === note.id} note={note} key={i} />)}
      </div>
    </div>
  );
}

export default App;