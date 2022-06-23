import React, { useState } from "react";

import "./Notebook.css";
import { DeleteOutlined } from "@ant-design/icons";
import { remove } from "../../features/noteSlice";
import { useDispatch } from "react-redux";

const Notebook = ({ notes, handleNotVisible }) => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <div onChange={handleNotVisible}>
        <div className="note-header">
          <h3 className="postCategory">{notes.category}</h3>
          <h3 className="postDate">{notes.date}</h3>
        </div>
        <div className="note">
          <span>{notes.textArea}</span>
          <div className="note-footer">
            <DeleteOutlined
              className="deleteBtn"
              onClick={() => dispatch(remove(notes.id))}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notebook;
