import React, { useEffect, useState } from "react";
import styles from './Worldcup.module.css';

const items = [
  {
    name:'고양이1',
    src: 'img/cat1.png'
  },
  {
    name: '고양이2',
    src: 'img/cat2.png'
  },
  {
    name: '고양이3',
    src: 'img/cat3.png'
  },
  {
    name: '고양이4',
    src: 'img/cat4.png'
  },
];

const Worldcup = () => {
  const[cats, setCats] = useState([]);
  const[displays, setDisplays] = useState([]);
  const[winners,setWinners] = useState([]);

  useEffect(() => {
    const cat1 = Math.floor(Math.random() * items.length);
    let cat2 = Math.floor(Math.random() * (items.length-1));
    if (cat1 === cat2) {
      cat2 = items.length
    }
    setDisplays([items[cat1], items[cat2]]);
  },[]);

  const clickHandler = () => {
    if (cats)
  }


  return (
    <div className={styles.container}>
      <h1>고양이 월드컵</h1>
      <div className={styles.warrper}>
        {displays.map(item => {
        return <div className={styles.worldcup} key={item.name}>
          <img src={item.src} alt="cat" />
          <div>{item.name}</div>
        </div>
      })}
      </div>
    </div>
  );
}
export default Worldcup;