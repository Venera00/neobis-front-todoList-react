import React from "react";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
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
        <button className="btn-edit" onClick={() => editTodo(task.id)}>
          Edit
        </button>
        <button className="btn-delete" onClick={() => deleteTodo(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
