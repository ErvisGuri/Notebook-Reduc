import React from "react";
import Modal1 from "../Modal/Modal";

import "./NotebookList.css";
import { Input } from "antd";

const { Search } = Input;

const NotebookList = () => {
  return (
    <div className="allNote_container">
      <Search />
      <div className="addNotesBtn">
        <h1 className="allNotes_header">All Notes</h1>
        <Modal1 />
      </div>
      <ul className="note_list">
        <li className="note1">Ervis Note</li>
        <li className="note1">Boli Note</li>
        <li className="note1">Ersi Notes</li>
        <li className="note1">Gigia Notes</li>
      </ul>
    </div>
  );
};

export default NotebookList;
