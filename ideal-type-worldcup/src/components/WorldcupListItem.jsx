import React from "react";
import styles from "./WorldcupListItem.module.css";
import { FaPlay, FaListOl, FaShare } from "react-icons/fa";
import mainCat from './img/mainCat.png';
import { Link } from "react-router-dom";

function WorldcupListItem () {
  return (
      <li className={styles.li_body}>
        <div className={styles.container}>
          <img src={mainCat} alt="" />
          <div className={styles.li_content}>
            <p>고양이 월드컵</p>
            <p>고양이 월드컵 입니다. 야무지게 즐겨주세요.</p>
            <div className={styles.li_button_vowel}>
              <Link to="/view">
                <button><FaPlay className={styles.FaPlay}/>시작하기</button>
              </Link>
                
              <button><FaListOl />랭킹보기</button>
              <button><FaShare />공유</button>
            </div>
          </div>
        </div>
      </li>
  );
}
export default WorldcupListItem;