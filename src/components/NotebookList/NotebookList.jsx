import React, { useState, useEffect } from "react";
import Modal1 from "../Modal/Modal";

import "./NotebookList.css";
import { Input } from "antd";
import NoteRowNames from "./NoteRowName";

import { useSelector } from "react-redux";
import { selectNotes } from "../../features/noteSlice";

const { Search } = Input;

const NotebookList = ({ handleVisible, ChangeContent, foundNotes }) => {
  const [searchField, setSearchField] = useState("");
  const noteList = useSelector(selectNotes);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filterNotes = noteList.filter((notes) =>
    notes.name.toLowerCase().includes(searchField.toLocaleLowerCase())
  );

  return (
    <div className="allNote_container">
      <Search
        onChange={handleChange}
        placeholder="Search Note ..."
        style={{ marginLeft: "10px" }}
      />
      <div className="addNotesBtn">
        <h1 className="allNotes_header">All Notes</h1>
        <Modal1 />
      </div>
      {noteList.map((note, i) => (
        <NoteRowNames
          foundNotes={foundNotes}
          onChangeContent={ChangeContent}
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
