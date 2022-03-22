import React from "react";

function User() {
  return new Promise((users) => {
    setTimeout(() => {
      users("Hi");
    }, 2000);
  })
}

async function asyncCall() {
  console.log("calling");
  const result = await User();
  console.log(result);
}

export default User;