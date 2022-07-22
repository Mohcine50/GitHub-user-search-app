import React, { useState } from "react";
import "./searchBar.css";
import { IoSearch } from "react-icons/io5";
function SearchBar({ isLoacding, setInfo }) {
  const style = { color: "#075db9", fontSize: 22 };
  const ENDPOINT = "http://localhost:3000";
  
  const getGithubUserInfo = async (user) => {
    isLoacding("Loading");
    const response = await fetch(`${ENDPOINT}/users/${user}`);
    const data = await response.json();
    setInfo(data);
    isLoacding("Completed");
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    if (searchTerm === "") {
      isLoacding("initail");
      return;
    }
    setInfo(getGithubUserInfo(searchTerm));
    setSearchTerm("");
  };

  return (
    <div className='searchBar'>
      <IoSearch style={style} />
      <form onSubmit={handelSubmit}>
        <input
          type='text'
          value={searchTerm}
          placeholder='Search Github username'
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
