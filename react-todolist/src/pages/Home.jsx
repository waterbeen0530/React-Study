import React, { useState } from 'react';
import InputBox from '../components/InputBox'; 
import ToDoItemList from '../components/ToDoItemList'; 

const Home = () => { 
  const [todoList, setTodoList] = useState(JSON.parse(window.localStorage.getItem("text")) || []); 
  
  return ( 
  <div className="homepage__container">
    <InputBox todoList={todoList} setTodoList={setTodoList} /> 
    <ToDoItemList  
      title={'할 일 목록'} 
      todoList={todoList} 
      setTodoList={setTodoList}
      checkedList={false}
      /> 
  </div> 
  ); 
}; 

export default Home;

