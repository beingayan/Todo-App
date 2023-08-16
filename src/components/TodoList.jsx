import React, { useReducer, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import { #f9fbe7 } from '@mui/material/colors';

const label = { inputProps: { "aria-label": "completed" } };


  /*
  * * * * * * * * * * * * * * * * * * * * * * 
  *                                         *
  *        custom functions  -start         *
  *                                         * 
  * * * * * * * * * * * * * * * * * * * * * *  *                                          
*/
const getIntialTodo = () => {

  const getTodoList = window.localStorage.getItem("todoList");
  if (getTodoList) {
    return JSON.parse(getTodoList);
  }

 
  return [];
};


const intialTodo = {
  todoItemList: getIntialTodo(),
};


const addTodo = (state, action) => {

  state.todoItemList.push(action.payLoad);
  var getAllTodo = window.localStorage.getItem("todoList");

  if (getAllTodo) {
    const todoArray = JSON.parse(getAllTodo);
    todoArray.push({ ...action.payLoad });

    window.localStorage.setItem("todoList", JSON.stringify(todoArray));

  } else {
    window.localStorage.setItem(
      "todoList",
      JSON.stringify([
        {
          ...action.payLoad,
        },
      ])
      
    );
  }
  return state;
};


 /*
  * * * * * * * * * * * * * * * * * * * * * * 
  *                                         *
  *        custom functions  -end           *
  *                                         * 
  * * * * * * * * * * * * * * * * * * * * * *  *                                          
*/


  /*
  * * * * * * * * * * * * * * * * * * * * * * 
  *                                         *
  *         Reducers  - start               *
  *                                         * 
  * * * * * * * * * * * * * * * * * * * * * *  *                                          
*/

const todoReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return addTodo(state, action);
  }
};

  /*
  * * * * * * * * * * * * * * * * * * * * * * 
  *                                         *
  *         Reducers  - End                 *
  *                                         * 
  * * * * * * * * * * * * * * * * * * * * * *  *                                          
*/



function TodoList({ parentData }) {

  const { isAddTodo, setIsAddTod } = parentData;
  const [todoContent, setTodoContent] = useState("");
  const [todoItems, dispatchTodoITmes] = useReducer(todoReducer, intialTodo);



  const submitTodo = (e) => {
    dispatchTodoITmes({
      type: "Add",
      payLoad: { todoContent, IsCompleted: false },
    });
    setIsAddTod(false);
    setTodoContent("");
  };

  const handleTodoContent = (e) => {
    setTodoContent(e.target.value);
  };


  const { todoItemList } = todoItems;

  return (
    <>
      <ul className="list-header">
       
        {todoItemList.length > 0 &&
          todoItemList.map((data, i) => {
            return (

              <li className="todo-list-items" key={i}>
                <Checkbox
                  {...label}
                  sx={{
                    color: "#f9fbe7",
                    "&.Mui-checked": {
                      color: "#f9fbe7",
                    },
                  }}
                />

                <span className="list-content">{data.todoContent}</span>

                <div className="list-button">
                  <IconButton aria-label="delete">
                    <DoneOutlineIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>{" "}
                </div>
              </li>
            );
          })}
          
      </ul>
      {isAddTodo === true && (
        <div className="add-content-field">
          <input
            type="text"
            placeholder="Add new todo..."
            onChange={handleTodoContent}
            value={todoContent}
          />
          <HighlightOffIcon
            className="close-todo-icon"
            onClick={() => {
              setIsAddTod(false);
              setTodoContent("");
            }}
          />
          <Button
            variant="contained"
            className="add-todo-btn"
            onClick={submitTodo}
            disabled={!todoContent.length}
          >
            Add{" "}
          </Button>
        </div>
      )}
    </>
  );
}

export default TodoList;
