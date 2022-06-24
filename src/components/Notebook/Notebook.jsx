import React from "react";

import "./Notebook.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { remove } from "../../features/noteSlice";
import { useDispatch } from "react-redux";

const Notebook = ({ note, showModal, updatePost }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className="note-header">
          <h3 className="postCategory">{note.category}</h3>
          <h3 className="postDate">{note.date}</h3>
        </div>
        <div className="note">
          <span>{note.textArea}</span>
          <div className="note-footer">
            <EditOutlined
              className="editBtn"
              onChange={updatePost}
              onClick={showModal}
            />

            <DeleteOutlined
              className="deleteBtn"
              onClick={() => dispatch(remove(note.id))}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notebook;
