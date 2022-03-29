import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoItemList = ({ title, todoList, setTodoList }) => (
  <div className="todo--list">
    <p className="todo--list--tit">{title}</p>

    <ul className="todo--list--ul">
      {todoList.map((todoItem) => {;

        return (
          <ToDoItem
            key = {todoItem.id}
            todoItem = {todoItem}
            todoList = {todoList}
            setTodoList = {setTodoList}
          />
        );
        })}
    </ul>
  </div>
);

export default ToDoItemList;