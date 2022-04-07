import React from "react";
import styles from './Header.module.css';
import { Link } from "react-router-dom";

function Header () {
  return (
    <div className={styles.container}>
    <header className={styles.header}>
      <Link to="/">
        <p className={styles.main_logo}>🏆MAIN</p>
      </Link>
      <div className={styles.header_menu}>
        <p id={styles.header_menu1}>이상형 월드컵</p>
        <p id={styles.header_menu2}>이상형 월드컵 만들기</p>
      </div>
    </header>
    </div>
  );
}

export default Header;