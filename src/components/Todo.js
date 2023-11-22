import React from "react";

export const Todo = ({
  task,
  toggleComplete,
  deleteTodo,
  editTodo,
  category,
}) => {
  const categoryClass = task.category === "business" ? "business" : "personal";

  return (
    <div className={`Todo`}>
      <label className={`category ${task.category}`}>
        <div className="todo-checkbox">
          <input type="checkbox" onClick={() => toggleComplete(task.id)} />
        </div>
        <span className={`checkmark ${category} ${categoryClass}`}></span>
        <span className={`${task.completed ? "completed" : ""}`}>
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
