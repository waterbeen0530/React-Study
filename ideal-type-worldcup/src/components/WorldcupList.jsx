import React from "react";
import styles from './WorldcupList.module.css';
import WorldcupListItem from "./WorldcupListItem";

function WorldcupList () {
  return(
    <div className={styles.container}>
      <ul>
        <WorldcupListItem />
      </ul>
    </div>
  );
}

export default WorldcupList;