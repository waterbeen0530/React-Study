import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bye from "./Bye";
import Hello from "./Hello";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="" element={ <Bye/>}/>
        <Route path="Bye" element={ <Bye/>}/>
        <Route path="Hello" element={ <Hello/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
