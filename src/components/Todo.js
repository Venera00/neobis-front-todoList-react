import React from "react";

export const Todo = ({ task, toggleComplete }) => {
  const categoryClass = task.category === "business" ? "business" : "personal";
  return (
    <div className={`Todo ${categoryClass}`}>
      <label className={`category ${task.category}`}>
        <input
          type="checkbox"
          className={`form__${task.category} ${
            task.completed ? "completed" : ""
          }`}
        />
        <span className={`checkmark ${categoryClass}`}></span>
        <span
          onClick={() => toggleComplete(task.id)}
          className={`${task.completed ? "completed" : ""}`}
        >
          {task.task}
        </span>
      </label>

      <div className="todo__btns">
        <button className="btn-edit">Edit</button>
        <button className="btn-delete">Delete</button>
      </div>
    </div>
  );
};
