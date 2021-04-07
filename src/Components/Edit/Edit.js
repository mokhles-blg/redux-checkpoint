import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../Redux/Actions/listTasks";
import { Modal, Button } from "react-bootstrap";

const Edit = ({ task }) => {
  const [show, setShow] = useState(false);
  const [newText, setnewText] = useState(task.text);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editTask(task.id, newText));
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input value={newText} onChange={(e) => setnewText(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleEdit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edit;
