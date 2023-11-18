import React from "react";
import { TodoForm } from "./TodoForm";

export const TodoWrapper = () => {
  return (
    <div className="TodoWrapper">
      <h1>
        What's up{" "}
        <span className="username" contentEditable="true">
          Venera
        </span>
      </h1>
      <h3 className="main__title">Create a todo</h3>
      <p className="main__subtitle">What's on your todo list</p>
      <TodoForm />
    </div>
  );
};
