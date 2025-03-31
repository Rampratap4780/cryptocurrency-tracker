import React from "react";
import ReactDOM from "react-dom/client";
import Nav from './component/Nav';
import Home from './component/pages/Home/Home';
import Coin from "./component/pages/Coin1/Coin";
import News from "./component/News";
import { BrowserRouter, Routes, Route } from "react-router"; // corrected import


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/coin/:coinId" element={<Coin />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
