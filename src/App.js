import logo from './logo.svg';
import './App.css';
import Topnav from './components/navbar/Topnav';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes> */}
      <Topnav />
      {/* </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
