import React, { useState, useEffect } from "react";
import Modal1 from "../Modal/Modal";

import "./NotebookList.css";
import { Input } from "antd";
import NoteRowNames from "./NoteRowName";

import { useSelector } from "react-redux";
import { selectNotes } from "../../features/noteSlice";

const { Search } = Input;

const NotebookList = ({ handleVisible }) => {
  const [selectedNote, setSelectNote] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [searchField, setSearchField] = useState("");
  const noteList = useSelector(selectNotes);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filterNotes = noteList.filter((notes) =>
    notes.name.toLowerCase().includes(searchField.toLocaleLowerCase())
  );

  const onChangeContent = (e) => {
    setSelectNote(e.target.value);
  };

  useEffect(() => {
    let foundNote = noteList.filter((not) => not.id === selectedNote);

    if (foundNote) {
      setShowContent(false);
    } else {
      setShowContent(true);
    }
  });

  return (
    <div className="allNote_container">
      <Search
        onChange={handleChange}
        placeholder="Search Note ..."
        style={{ marginLeft: "10px", borderRadius: "6px", color: "1 93 93" }}
      />
      <div className="addNotesBtn">
        <h1 className="allNotes_header">All Notes</h1>
        <Modal1 />
      </div>
      {noteList.map((note, i) => (
        <NoteRowNames
          onChangeContent={onChangeContent}
          note={note}
          handleVisible={handleVisible}
          key={i}
          filterNotes={filterNotes}
        />
      ))}
    </div>
  );
};

export default NotebookList;
