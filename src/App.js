import React, { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";

//Importing Components
import Notebook from "./components/Notebook/Notebook";
import NotebookList from "./components/NotebookList/NotebookList";
import { useSelector } from "react-redux";
import { selectNotes } from "./features/noteSlice";
import { updateNote } from "./features/noteSlice";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedNote, setSelectedNote] = useState(0);
  const dispatch = useDispatch();
  const noteList = useSelector(selectNotes);
  const [isEdit, setIsEdit] = useState(false);

  const onChangeContent = (id) => {
    setSelectedNote(id);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="App">
      <div className="noteList_container">
        <NotebookList
          note={noteList.find((item) => item.id === selectedNote)}
          isModalVisible={isModalVisible}
          showModal={showModal}
          handleCancel={handleCancel}
          onChangeContent={onChangeContent}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      </div>
      <div className="note_container">
        <h1 className="noteHeader_container">My Note</h1>
        {noteList
          .filter((not) => not.id === selectedNote)
          .map((note, i) => (
            <Notebook
              showModal={showModal}
              setIsEdit={setIsEdit}
              handleCancel={handleCancel}
              value={note.id}
              checked={selectNotes === note.id}
              note={note}
              key={i}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
