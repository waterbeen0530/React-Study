import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from './components/MainScreen';
import Worldcup from "./components/Worldcup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen/>} />
          <Route path="/view" element={<Worldcup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
