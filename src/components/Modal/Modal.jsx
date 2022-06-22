import { Button, Modal, Input, Select } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import "antd/dist/antd.css";

import { useDispatch, useSelector } from "react-redux";
import { addNote, selectNotes } from "../../features/noteSlice";

import "./Modal.css";

const { Option } = Select;
const { TextArea } = Input;

const Modal1 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [name, setName] = useState("");
  const [categorys, setCategorys] = useState("");
  const [date, setDate] = useState("");
  const [textArea, setTextArea] = useState("");

  const notes = useSelector(selectNotes);
  const dispatch = useDispatch(addNote());

  const onSubmitChange = (e) => {
    setIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
    setDate(e.format(dateFormat));
  };

  const categoryChangeHandler = (event) => {
    setCategorys(event);
  };

  const textAreaChangeHandler = (e) => {
    setTextArea(e.target.value);
  };

  function addNewPost(e) {
    e.preventDefault();
    console.log("hey");
    dispatch(
      addNote({
        text: name,
        category: categorys,
        date: date,
        textArea: textArea,
        id: Math.random() * 1000,
      })
    );
  }

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
        wrapclassName="addPostModal"
        onChange={nameChangeHandler}
        title="Add a Note"
        onOk={addNewPost}
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
              className="select"
              placeholder="Select a category"
              style={{ width: "200px", margin: "2px 60px 2px 63px" }}
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
              onChange={dateChangeHandler}
              style={{ width: "200px", marginLeft: "89.5px" }}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            Write Your Experience:
            <TextArea
              value={textArea}
              onChange={textAreaChangeHandler}
              rows={8}
            />
          </div>
        </div>
        <Button onClick={addNewPost} type="Submit" className="modalSubmitBtn">
          POST
        </Button>
      </Modal>
    </>
  );
};

export default Modal1;
