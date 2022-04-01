import React from "react";
import styles from './MainScreen.module.css';
import WorldcupList from "./WorldcupList";

function MainScreen () {

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.main_logo}>🏆MAIN</p>
        <div className={styles.header_menu}>
          <p id={styles.header_menu1}>이상형 월드컵</p>
          <p id={styles.header_menu2}>이상형 월드컵 만들기</p>
        </div>
      </header>

      <body>
        <WorldcupList />
      </body>
      

    </div>
  );
}

export default MainScreen; 