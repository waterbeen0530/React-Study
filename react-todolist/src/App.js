import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate/TodoTemplate';
import TodoHead from './components/TodoHead/TodoHead';
import TodoList from './components/TodoList/TodoList';
import TodoItem from './components/TodoItem/TodoItem';
 
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
 
function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoItem />
      </TodoTemplate>
    </>
  );
}
 
export default App;
