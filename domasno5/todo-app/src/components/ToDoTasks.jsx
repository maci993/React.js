import React, { useState } from "react";
import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import ToDoForm from "./ToDoForm";
const ToDoTasks = ({ todos, updateToDo, deleteToDo }) => {
  const [editInput, setEditInput] = useState({
    id: null,
    text: "",
  });

  const submitUpdate = (value) => {
    updateToDo(editInput.id, value);
    setEditInput({
      id: null,
      text: "",
    });
  };

  if (editInput.id)
    return <ToDoForm edit={editInput} handleAddToDo={submitUpdate} />;
  return todos.map((todo) => (
    <div key={todo.id} className="">
      {todo.updateToDo}
      <input type="text" value={todo.text} />
      <div>
        <button className="check-icon">
          <CheckIcon />
        </button>
        <button
          className="pencil-button"
          onClick={() => setEditInput({ id: todo.id, text: todo.text })}
        >
          <PencilSquareIcon />
        </button>
        <button className="trash-icon" onClick={() => deleteToDo(todo.id)}>
          <TrashIcon />
        </button>
      </div>
    </div>
  ));
};

export default ToDoTasks;
