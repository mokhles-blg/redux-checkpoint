import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/Actions/listTasks";
import { Form, Button } from "react-bootstrap";
import "./AddTask.css";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();

    if (text) {
      dispatch(addTask({ id: Math.random(), text: text, isDone: false }));
      setText("");
    } else {
      alert("can not add an empty task");
    }
  };

  return (
    <Form onSubmit={handleChange} className="add-task-container">
      <Form.Control
        type="text"
        placeholder="Enter new task ..."
        className="input-task"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Button variant="light" onClick={handleChange}>
        Add
      </Button>
    </Form>
  );
};

export default AddTask;