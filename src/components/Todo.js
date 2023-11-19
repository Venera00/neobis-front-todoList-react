import React from "react";

export const Todo = ({ task, toggleComplete }) => {
  return (
    <div className="Todo">
      <input type="checkbox" class="task-check" />
      <span
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </span>

      <div className="todo__btns">
        <button className="btn-edit">Edit</button>
        <button className="btn-delete">Delete</button>
      </div>
    </div>
  );
};
