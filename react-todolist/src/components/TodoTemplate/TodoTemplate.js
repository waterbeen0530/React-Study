import React from "react";
import styles from "./TodoTemplate.module.css";

function TodoTemplate({ children }) {
  return (
    <>
      <div className={ styles.container }>{ children }</div>
    </>
  );
}

export default TodoTemplate;