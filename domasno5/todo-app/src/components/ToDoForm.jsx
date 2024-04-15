import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const ToDoForm = ({ handleAddToDo, edit }) => {
  const [inputText, setInputText] = useState("");

  const handleClickPlus = (e) => {
    e.preventDefault();
    handleAddToDo({ id: Math.random(Math.floor * 1000), text: inputText });
    setInputText("");
  };

  return (
    <form>
      <div className="todo-app">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="button-plus"
          type="submit"
          onClick={(e) => handleClickPlus(e)}
        >
          <PlusIcon className="plus-icon"/>
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;
