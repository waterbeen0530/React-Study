import React, {useState, useEffect} from "react";
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
  const [cats, setCats] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
 
  useEffect(() => {
    items.sort(() => Math.random() -0.5);
    setCats(items);
    setDisplays([items[0], items[1]]);
  }, []);
 
  const clickHandler = (cat) => () => {
    if(cats.length <= 2) {
      if(winners.length === 0) {
        setDisplays([cat]);
      }
      else {
        let updatedCat = [...winners, cat];
        setCats(updatedCat);
        setDisplays([updatedCat[0], updatedCat[1]]);
        setWinners([]);
      }
    }
    else if(cats.length > 2){
      setWinners([...winners, cat]);
      setDisplays([cats[2], cats[3]]);
      setCats(cats.slice(2))
    }
  }
 
  return (
    <>
      <h1>고양이 올림픽</h1>
      {displays.map((d) => {
        return (
          <div key={d.name} onClick={clickHandler(d)}>
            <img src={d.src} alt="" />
            <p>{d.name}</p>
          </div>
        );
      })}
    </>
  );
}

export default Worldcup;