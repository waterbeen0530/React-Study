import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoItemList = ({ title, todoList, setTodoList, checkedList }) => (
  <div className="todo--list">
    <p className="todo--list--tit">{title}</p>

    <ul className="todo--list--ul">
      {todoList && todoList.map((todoItem) => {
        if(checkedList !== todoItem.chacked) return null;

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