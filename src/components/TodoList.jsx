import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

function TodoList() {
  return (
    <>
      <ul className="list-header">
        <li className="todo-list-items">
          {" "}
          <span className="list-content">Check</span>
          <div className="list-button">
          <IconButton aria-label="delete">
            <DoneOutlineIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>{" "}
          </div>
        </li>
        
      
      </ul>
    </>
  );
}

export default TodoList;
