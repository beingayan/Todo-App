import React, { useRef, useMemo, useState } from "react";
// MIUI-components import
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// Main-components
import TodoList from "./TodoList";

function TodoContainer() {
  const [selectedFilteredVal, setSelectedFilteredVal] = useState(0);
  const [isAddTodo, setIsAddTod] = useState(false);

  const handleChange = (e) => {
    setSelectedFilteredVal(e.target.value);
  };

  const addTodo = () => {
    setIsAddTod(true);
  };

  const propItems = {
    isAddTodo,
    setIsAddTod,
  };

  return (
    <Container maxWidth="sm" className="container">
      
      <div className="todo-container-header">
        <Button variant="contained" onClick={addTodo}>
          Add Todo
        </Button>

        <Select
          value={selectedFilteredVal}
          onChange={handleChange}
          inputProps={{ "aria-label": "Without label" }}
          id="demo-select-small"
          style={{
            height: "31px",
            width: "26%",
            outline: "none",
            border: "none",
            background: "#1976d2",
          }}
        >
          <MenuItem value={0}>ALL</MenuItem>
          <MenuItem value={1}>Completed</MenuItem>
          <MenuItem value={2}>In complete</MenuItem>
        </Select>
        {/* {selectedFilteredVal} */}
      </div>

      <div className="todo-container">
        <TodoList parentData={propItems} />
      </div>
    </Container>
  );
}

export default TodoContainer;
