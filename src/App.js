import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
// import Home from "./page/Home";
import NotFound from "./page/NotFound";
import "./scss/app.scss";
import React from "react";
import Cart from "./page/Cart";

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="content">
        <div className="container">
            <Routes>
              <Route path="/" element={<Home searchValue={searchValue} setSearchValue={setSearchValue} />} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
