import { BrowserRouter, Route, Routes } from "react-router-dom";
import home from "./color-my-bamboo-home./home";
import Bye from "./Bye";
import Hello from "./Hello";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="home" element={ <home/>}/>
        <Route path="Bye" element={ <Bye/>}/>
        <Route path="Hello" element={ <Hello/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
