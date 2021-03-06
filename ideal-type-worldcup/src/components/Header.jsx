import React from "react";
import styles from './Header.module.css';
import { Link } from "react-router-dom";

function Header () {
  return (
    <div className={styles.container}>
    <header className={styles.header}>
      <Link to="/">
        <p className={styles.main_logo}>πMAIN</p>
      </Link>
      <div className={styles.header_menu}>
        <p id={styles.header_menu1}>μ΄μν μλμ»΅</p>
        <p id={styles.header_menu2}>μ΄μν μλμ»΅ λ§λ€κΈ°</p>
      </div>
    </header>
    </div>
  );
}

export default Header;