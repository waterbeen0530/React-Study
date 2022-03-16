import React from "react";

function User({ user }) {
  return(
    <div>
      <b>{ user.username }</b> <span>({ user.email })</span>
    </div>
  );
}

function UserList() {
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

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
        ))}
    </div>
  );
}

export default UserList;