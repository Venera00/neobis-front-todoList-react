import React from "react";

export const TodoForm = () => {
  return (
    <form className="TodoForm">
      <input type="text" className="todo-input" placeholder="e.g. get a milk" />

      <div className="category-wrapper">
        <label className="todo-category">
          <input
            type="radio"
            name="category"
            value="business"
            className="form__business"
          />
          <span className="checkmark business"></span>
          <p class="form__title">Business</p>
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
      <button type="submit" className="todo-btn"></button>
    </form>
  );
};
