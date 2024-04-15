import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoTasks from "./ToDoTasks";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [history, setHistory] = useState([]);

  const addToDo = (value) => {
    if (!value.text || /^\s*$/.test(value.text)) {
      return;
    }
    setTodos([...todos, value]);
  };

  const updateToDo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(todos.map((item) => (item.id === todoId ? newValue : item)));
  };

  const deleteToDo = (deleteId) => {
    const deleteToDo = todos.find((todos) => todos.id === deleteId);
    setHistory([deleteToDo, ...history]);
    setTodos(todos.filter((todos) => todos.id !== deleteId));
  };

  return (
    <div className="app">
      <ToDoForm handleAddToDo={addToDo} />
      <ToDoTasks
        todos={todos}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
      />
      <div>
        {history.map((deleteToDo) => (
          <div key={deleteToDo.id}>
            <p>{deleteToDo.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
