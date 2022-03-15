import React from "react";
import Hello from "./Hello";
import Bye from "./Bye";
import './App.css';

function App() {
  const name = 'react';
  return (
    <div>
      {/* 주석처리 */}
      /* 중괄호로 감싸지 않으면 화면에 보임 */
      <Hello />
      <Bye />
      <div className="Add">{name}</div>
      <div className="gray-box"></div>
    </div>
  );
}

export default App;
