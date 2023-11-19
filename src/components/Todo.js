import React from "react";

export const Todo = ({ task }) => {
  return (
    <div className="Todo">
      <input type="checkbox" class="task-check" />
      <span className="todo__text form__title">{task.task}</span>

      <div className="todo__btns">
        <button className="btn-edit">Edit</button>
        <button className="btn-delete">Delete</button>
      </div>
    </div>
  );
};
