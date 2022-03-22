{/*
  //상태 변경 --> 컴포넌트 재 랜더링
import React, { useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0);
  console.log('렌더링... count: ${count}');

  return(
    <>
      <p>{count}번 클릭하셨습니다.</p>
      <button onClick={() => setCount(setCount + 1)}>클릭</button>
    </>
  )
}
*/}

import React, { useEffect } from "react";

function AutoCounter() {
  const [count, setcount] = useState(0);
  console.log('랜더링... count: ${count}');

  useEffect(() => {
    const intervalId = setInterval(() => setcount((count) => count + 1), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <p>자동 카운트: {count}</p>;

}