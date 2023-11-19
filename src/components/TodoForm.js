import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="e.g. get a milk"
        onChange={(e) => setValue(e.target.value)}
      />

      <div className="category-wrapper">
        <label className="todo-category">
          <input
            type="radio"
            name="category"
            value="business"
            className="form__business"
          />
          <span className="checkmark business"></span>
          <p className="form__title">Business</p>
        </label>

        <label className="todo-category">
          <input
            type="radio"
            name="category"
            value="personal"
            className="form__personal"
            checked
          />
          <span className="checkmark personal"></span>
          <p className="form__title">Personal</p>
        </label>
      </div>
      <button type="submit" className="todo-btn">
        Add todo
      </button>
    </form>
  );
};
