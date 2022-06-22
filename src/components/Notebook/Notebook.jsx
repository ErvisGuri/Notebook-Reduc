import React from "react";

import "./Notebook.css";
import { DeleteOutlined } from "@ant-design/icons";
import { remove } from "../../features/noteSlice";
import { useDispatch, useSelector } from "react-redux";
import selectNotes from "../../features/noteSlice";

const Notebook = () => {
  const dispatch = useDispatch();
  const noteList = useSelector(selectNotes);
  return (
    <>
      <div className="note-header">
        <h3 className="postCategory">{noteList.category}</h3>
        <h3 className="postDate">{noteList.date}</h3>
      </div>
      <div className="note">
        <span>{noteList.textArea}</span>
        <div className="note-footer">
          <DeleteOutlined
            className="deleteBtn"
            onClick={() => dispatch(remove(noteList.id))}
          />
        </div>
      </div>
    </>
  );
};

export default Notebook;
