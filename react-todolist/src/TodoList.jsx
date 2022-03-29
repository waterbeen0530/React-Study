import React, { useEffect, useRef, useState } from "react";

const TodoList = () => {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
    });
    setTodoList(nextTodoList);

    setText('');
    inputRef.current.focus();
  };

  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      onClick();
    }
  };

  const saveData = () => {
    const myList = { text: todoList };
    window.localStorage.setItem("myText", JSON.string)
  }

  return (
    <div>
      <input value={text} onChange={onChangeInput} ref={inputRef} onKeyPress={onKeyPress} placeholder="내용 입력ㄲ"/>
      <button onClick={onClick}>추가</button>
      <ul>
        {todoList.map((todo)=>(
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;