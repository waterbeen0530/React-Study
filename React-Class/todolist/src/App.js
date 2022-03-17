import React from 'react';
import Counter from './Counter';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'lim',
      email: 'lim@gmail.com'
    },

    {
      id: 2,
      username: 'su',
      email: 'su@gmail.com'
    },

    {
      id: 3,
      username: 'bin',
      email: 'bin@gmail.com'
    }
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    //나중에 구현 할 배열에 항목 추가하는 로직
    //...

    nextId.current += 1;
  };

  return (
    <>
      <UserList users={users} />;
      <Counter2 />
    </>
  )

}

export default App;
