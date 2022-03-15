import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>
      {/* 만약 isSpecial 이름만 넣어주면 isSpecial={true}가 됨 */}
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
