import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../../Redux/Actions/listTasks";
import Edit from "../Edit/Edit";
import { Button } from "react-bootstrap";
import "./Task.css";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="task-card">
        <span className={task.isDone ? "done" : null}>{task.text}</span>
        <div className="three-btn-card"><Edit task={task} />
        <Button
          variant="outline-primary"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Delete
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => dispatch(doneTask(task.id))}
        >
          {task.isDone ? "undone" : "done"}
        </Button></div>
      </div>
    </div>
  );
};

export default Task;