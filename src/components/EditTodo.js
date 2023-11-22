import React, { useState } from "react";

export const EditTodo = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  };
  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
      <div className="editform-container">
        <input
          type="text"
          className="edit-input"
          value={value}
          placeholder="Update task"
          onChange={(e) => setValue(e.target.value)}
        />

        <button type="submit" className="upd-btn">
          Update
        </button>
      </div>
    </form>
  );
};
