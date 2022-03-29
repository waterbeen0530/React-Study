import React from "react";

const ToDoItem = ({ todoItem }) => {

  return (
    <li className="todo--item">
    <input type="checkbox" className="todo--item--checkbox" />
    <span className="todo--item--ctx">{todoItem.text}</span>
    <button type="button" className="todo--delete--btn">🗑️</button>
  </li>
  );

};

export default ToDoItem;