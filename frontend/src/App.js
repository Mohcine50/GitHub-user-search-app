import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SearchBar from "./components/search bar/SearchBar";
import UserCart from "./components/user cart/UserCart";

function App() {
  const [info, setInfo] = useState({});
  const [Loading, setLoading] = useState("initail");
  const [theme, setTheme] = useState("dark");

  return (
    <div className='app' data-theme={theme}>
      <div className='container'>
        <Header theme={theme} setTheme={setTheme} />
        <SearchBar theme={theme} isLoacding={setLoading} setInfo={setInfo} />
        <UserCart theme={theme} info={info} loading={Loading} />
      </div>
    </div>
  );
}

export default App;
