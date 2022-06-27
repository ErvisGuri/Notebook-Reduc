import { Button, Modal, Input, Select } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import "antd/dist/antd.css";

import { useDispatch } from "react-redux";
import { addNote, updateNote, selectNotes } from "../../features/noteSlice";
import { useSelector } from "react-redux";
import "./Modal.css";

const { Option } = Select;
const { TextArea } = Input;

const Modal1 = ({
  showModal,
  handleCancel,
  isModalVisible,
  note,
  onChangeContent,
  isEdit,
  setIsEdit,
}) => {
  // const noteList = useSelector(selectNotes);
  // const note = noteList.find((item) => item.id === selectedNote);
  console.log(note);
  console.log(isEdit ? note.name : "s");
  const [name, setName] = useState(isEdit ? note.name : "");
  const [categorys, setCategorys] = useState(isEdit ? note.categorys : "");
  const [date, setDate] = useState(isEdit ? note.date : "");
  const [textArea, setTextArea] = useState(isEdit ? note.textArea : "");

  const dispatch = useDispatch();

  console.log(date, name, categorys, textArea);
  const clearInput = () => {
    setName("");
    setCategorys("");
    setDate("");
    setTextArea("");
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const dateChangeHandler = (e) => {
    const dateFormat = "MM/DD/YYYY";
    setDate(e?.format(dateFormat));
  };

  const categoryChangeHandler = (event) => {
    setCategorys(event);
  };

  const textAreaChangeHandler = (e) => {
    setTextArea(e.target.value);
  };

  function addNewPost(e) {
    e.preventDefault();
    const id = Math.random() * 1000;
    dispatch(
      addNote({
        name: name,
        categorys: categorys,
        date: date,
        textArea: textArea,
        id: id,
      })
    );
    clearInput();
    handleCancel();
    onChangeContent(id);
  }

  const updatePost = () => {
    console.log("at update");
    console.log(name, categorys, date, textArea);
    dispatch(
      updateNote({
        id: note.id,
        name: name,
        categorys: categorys,
        date: date,
        textArea: textArea,
      })
    );
    handleCancel();
    onChangeContent(note.id);
    setIsEdit(false);
    clearInput();
  };

  return (
    <>
      <Button
        style={{
          color: "rgb(1 93 93)",
          marginLeft: "70px",
          marginBottom: "20px",
          border: "none",
          borderRadius: "11px",
          backgroundColor: "rgb(118 171 171)",
        }}
        onClick={showModal}
      >
        Add Note
        <PlusOutlined />
      </Button>
      <Modal
        mask={true}
        maskStyle={{ backgroundColor: "rgb(35, 88, 88)" }}
        title={isEdit ? "Update a Note" : "Add a Note"}
        visible={isModalVisible}
        onCancel={handleCancel}
        bodyStyle={{ height: "400px" }}
        footer={false}
      >
        <div className="body">
          <div className="modalName">
            Name Surname:
            <Input
              value={name}
              onChange={nameChangeHandler}
              style={{ width: "200px", marginLeft: "23px" }}
              placeholder="name"
            />
          </div>
          <div className="modalCategory">
            Category:
            <Select
              value={categorys}
              onSelect={categoryChangeHandler}
              style={{
                width: "200px",
                margin: "3px 60px 2px 62.5px",
              }}
            >
              <Option value="Financial Notes">Financial Notes</Option>
              <Option value="Journal">Journal</Option>
              <Option value="ToDo">ToDo</Option>
              <Option value="Remember">Remember</Option>
            </Select>
          </div>
          <div className="date">
            Date:
            <DatePicker
              defaultValue={date}
              placeholder="Choose Date"
              onChange={dateChangeHandler}
              style={{ width: "200px", marginLeft: "89px" }}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            Write Your Note:
            <TextArea
              value={textArea}
              onChange={textAreaChangeHandler}
              rows={8}
            />
          </div>
        </div>
        {isEdit ? (
          <Button onClick={updatePost} type="Submit" className="modalSubmitBtn">
            Save
          </Button>
        ) : (
          <Button onClick={addNewPost} type="Submit" className="modalSubmitBtn">
            Post
          </Button>
        )}
      </Modal>
    </>
  );
};

export default Modal1;
