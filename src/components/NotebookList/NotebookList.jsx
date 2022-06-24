import React, { useState } from "react";
import Modal1 from "../Modal/Modal";

import "./NotebookList.css";
import { Input } from "antd";
import NoteRowNames from "./NoteRowName";

import { useSelector } from "react-redux";
import { selectNotes } from "../../features/noteSlice";

const { Search } = Input;

const NotebookList = ({
  updatePost,
  onChangeContent,
  showModal,
  handleCancel,
  isModalVisible,
  note,
}) => {
  const [searchField, setSearchField] = useState("");
  const noteList = useSelector(selectNotes);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="allNote_container">
      <Search
        onChange={handleChange}
        placeholder="Search Note ..."
        style={{ marginLeft: "10px" }}
      />
      <div className="addNotesBtn">
        <h1 className="allNotes_header">All Notes</h1>
        <Modal1
          updatePost={updatePost}
          isModalVisible={isModalVisible}
          handleCancel={handleCancel}
          showModal={showModal}
          note={note}
        />
      </div>
      {noteList
        .filter((note) =>
          note.name.toLowerCase().includes(searchField.toLocaleLowerCase())
        )
        .map((note, i) => (
          <NoteRowNames note={note} key={i} onChangeContent={onChangeContent} />
        ))}
    </div>
  );
};

export default NotebookList;
