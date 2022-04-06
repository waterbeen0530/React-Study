import React from "react";
import WorldcupList from "./WorldcupList";
import Header from "./Header";
import NavBar from './NavBar';

function MainScreen () {

  return (
    <div>
      <Header />
      <NavBar />
      <WorldcupList />
    </div>
  );
}

export default MainScreen; 