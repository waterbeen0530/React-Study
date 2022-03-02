/* eslint-disable */
import React, { useState } from 'react'
import './App.css';

function App() {

  let [title, ChangeTitle] = useState(['남자코트 추천', '강남 우동 맛집','파이썬 독학']);
  let [like, ChangeLike] = useState(0);

  function titleManagement(){
    var newArray = [...title];
    newArray[0] = '여자코트 추천';
    ChangeTitle( newArray );
  }

  return (
    <div className="App">
        <div className='black-nav'>
          <div>개발 Blog</div>
        </div>

        <button onClick={ titleManagement }>버튼</button>

        <div className='list'>
        <h3> { title[0] } <span onClick={ ()=>{ ChangeLike(like + 1) } }>👍</span> { like } </h3>
        <p>3월 1일 발행</p>
        <hr/>
        </div>

        <div className='list'>
        <h3> { title[1] } </h3>
        <p>3월 2일 발행</p>
        <hr/>
        </div>

        <div className='list'>
        <h3> { title[2] } </h3>
        <p>3월 3일 발행</p>
        <hr/>
        </div>
    </div>
  );
}

export default App;
