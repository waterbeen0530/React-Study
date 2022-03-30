import React, { useEffect, useRef, useState } from "react";
import styles from './TodoList.module.css';

const TodoList = () => {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')));
  const inputRef = useRef(null);

  const onChangeInput = (event) => {
    setText(event.target.value);
  };

  const saveData = () => {
    window.localStorage.setItem("todoList", JSON.stringify(todoList));
  };

  const onRemove = (id) => {
    setTodoList(todoList.filter((todo)=>todo.id !== id));
  }

  const onSubmit=(e)=>{
    e.preventDefault()

    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
    });
    setTodoList(nextTodoList);

    setText('');
    inputRef.current.focus();

  }
  useEffect(()=>{
    saveData()
  },[todoList])
  console.log(todoList);

  return (
    <div className={ styles.container }>
      <form className={ styles.input_wrapper } onSubmit={onSubmit}>
      <input 
        className={ styles.input }
        utoComplete="off" 
        value={text} 
        onChange={onChangeInput} 
        ref={inputRef}  
        placeholder="내용 입력ㄲ"
      />
      <button className={ styles.add__button }>추가</button>
      </form>
      <ul className={ styles.ul }>
        {todoList.map((todo, index)=>(
          <li className={ styles.li } key={todo.id}>{todo.text} 
            <button className={ styles.li__button } onClick={()=>onRemove(todo.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;