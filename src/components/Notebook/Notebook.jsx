import React from "react";

import "./Notebook.css";
import { DeleteOutlined } from "@ant-design/icons";

const Notebook = () => {
  return (
    <>
      <div className="note-header">
        <h3 className="postCategory">Category</h3>
        <h3 className="postDate">6/22/2022</h3>
      </div>
      <div className="note">
        <span>Hello! This is my first note! Ervis</span>
        <div className="note-footer">
          <DeleteOutlined className="deleteBtn" />
        </div>
      </div>
    </>
  );
};

export default Notebook;
