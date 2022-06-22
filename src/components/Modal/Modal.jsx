import { Button, Modal, Input, Select } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import "./Modal.css";

const { Option } = Select;
const { TextArea } = Input;

const Modal1 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button
        style={{
          color: "rgb(1 93 93)",
          marginLeft: "70px",
          border: "none",
          borderRadius: "11px",
          backgroundColor: "rgb(118 171 171)",
        }}
        onClick={showModal}
      >
        Add Note
        <PlusOutlined />
        <Modal
          mask={true}
          maskStyle={{ backgroundColor: "rgb(223, 202, 202)" }}
          wrapclassName="addPostModal"
          title="Add a Note"
          onOk={handleOk}
          visible={isModalVisible}
          onCancel={handleCancel}
          bodyStyle={{ height: "400px" }}
          footer={false}
        >
          <div className="body">
            <div className="modalName">
              Name Surname:
              <Input
                style={{ width: "200px", marginLeft: "23px" }}
                placeholder="name"
              />
            </div>
            <div className="modalCategory">
              Category:
              <Select
                className="select"
                placeholder="Select a category"
                style={{ width: "200px", margin: "2px 60px 2px 63px" }}
              >
                <Option value="Lifestyle">Lifestyle</Option>
                <Option value="Cooking">Cooking</Option>
                <Option value="Technology">Technology</Option>
                <Option value="Sport">Sport</Option>
              </Select>
            </div>
            <div className="date">
              Date:
              <DatePicker style={{ width: "200px", marginLeft: "89.5px" }} />
            </div>
            <div style={{ marginTop: "20px" }}>
              Write Your Experience:
              <TextArea rows={8} />
            </div>
          </div>
        </Modal>
      </Button>
    </>
  );
};

export default Modal1;
