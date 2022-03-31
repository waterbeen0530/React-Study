import React from "react";
import styles from "./WorldcupListItem.module.css";
import { FaPlay, FaListOl, FaShare } from "react-icons/fa";
import mainCat from './img/mainCat.png';

function WorldcupListItem () {

  const clickMe = () => {
    document.location.href('/')
  }


  return (
    <li className={styles.li_body}>
      <div className={styles.container}>
        <img src={mainCat} alt="" />
        <div className={styles.li_content}>
          <p className={styles.li_title}>고양이 월드컵</p>
          <p className={styles.li_p}>고양이 월드컵입니다. 야무지게 즐겨주세요.</p>
          <div className={styles.li_button_vowel}>
            <button 
              className={styles.li_button1}
              onClick={clickMe}>
              <FaPlay />시작하기</button>
            <button className={styles.li_button2}><FaListOl />랭킹보기</button>
            <button className={styles.li_button3}><FaShare />공유</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default WorldcupListItem;