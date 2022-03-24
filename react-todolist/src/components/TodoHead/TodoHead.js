import React from "react";
import styles from "./TodoHead.module.css";

function TodoHead() {
  return (
    <>
      <h1>2022년 03월 24일</h1>
      <div className={ styles.day }>목요일</div>
      <div className={ styles.tasks_left }>할 일 2개 남음</div>
    </>
  );
}

export default TodoHead;