import React from "react";
import Modal1 from "../Modal/Modal";

import "./NotebookList.css";
import { Input } from "antd";
import NoteRowNames from "./NoteRowName";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { addNote, selectNotes } from "../../features/noteSlice";

const { Search } = Input;

const NotebookList = () => {
  const noteList = useSelector(selectNotes);

  return (
    <div className="allNote_container">
      <Search
        placeholder="Search Note ..."
        style={{ marginLeft: "10px", borderRadius: "6px", color: "1 93 93" }}
      />
      <div className="addNotesBtn">
        <h1 className="allNotes_header">All Notes</h1>
        <Modal1 />
      </div>
      {addNote.map((note, i) => {
        <NoteRowNames note={note} key={i} />;
      })}
    </div>
  );
};

export default NotebookList;
