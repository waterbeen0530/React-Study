import React from "react";
import styles from './NavBar.module.css';

function NavBar () {
  return(
    <div className={styles.container}>
      <div className={styles.nav_collect1}>
        <button>조회순</button>
        <button>최신순</button>
      </div>
      <div className={styles.nav_collect2}>
        <button>전체</button>
        <button>월</button>
        <button>주</button>
        <button>일</button>
      </div>
      <div className={styles.nav_collect3}>
        <button>전체</button>
        <button>이미지</button>
        <button>동영상</button>
      </div>
      <div className={styles.input}>
        <input placeholder="월드컵 제목을 검색하세요." type="text" />
        <button>검색</button>
      </div>
    </div>
  );
}

export default NavBar;