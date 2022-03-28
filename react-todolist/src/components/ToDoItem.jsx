import React from "react";

const ToDoItem = ({ todoItem, todoList, setTodoList }) => {
  
  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      chacked: item.id === todoItem.id ? !item.checked : item.checked,
    }));
    setTodoList(nextTodoList);
  }
  return (
    <li className="todo--item">
    <input 
      type="checkbox" 
      className="todo--item--checkbox"
      checked={todoItem.checked}
      onChange={onChangeCheckbox}
      />
    <span className="todo--item--ctx">{todoItem.text}</span>
    <button type="button" className="todo--item--edit-btn">✏️</button>
    <button type="button" className="todo--delete--btn">🗑️</button>
  </li>
  );
};

export default ToDoItem;