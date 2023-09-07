import { Routes,Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<Home />}/> 
         
      </Routes>
    </>
  );
}

export default App;
