import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./style.css";

const App = () => {
  const [value, setValue] = useState();
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState([]);

  const users = [
    { name: "john", age: 21 },
    { name: "kyle", age: 45 },
    { name: "jackob", age: 67 },
    { name: "hitesh", age: 15 },
    { name: "bob", age: 11 },
    { name: "smith", age: 14 },
    { name: "brad", age: 45 },
    { name: "john", age: 36 },
  ];
  const handleInput = (event) => {
    setSearch(event.target.value);
  };
  const handleSearch = () => {
    setSearchResult(users.filter((item) => item.name === search));
    // console.log(searchResult[0].name);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleFilter = () => {
    if (value === "drink") {
      setResult(users.filter((item) => item.age > 18));
    }
    if (value === "cannot") {
      setResult(users.filter((item) => item.age <= 18));
    }
  };
  return (
    <div className="app_wrap">
      <h1>filter</h1>
      <div>
        <select onChange={handleChange}>
          <option>select...</option>
          <option value="drink">Can drink</option>
          <option value="cannot">Can not drink</option>
        </select>
        <br />
        <br />
        <button onClick={handleFilter}>Apply filter</button>
        <br />
        <br />
        <input
          placeholder="search for a person..."
          value={search}
          onChange={handleInput}
        />
        <br />
        <br />
        <button onClick={handleSearch}>Search</button>
        <h5>List of all person:</h5>
        <div className="card_box">
          {users.map((item) => (
            <span>
              <span>{item.name}</span>
              <span>{item.age}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="filter_result">
        <h1 style={{ color: "red" }}>Filter result:</h1>
        {result.map((item) => (
          <Card name={item.name} age={item.age} />
        ))}
      </div>
      <h1>
        <h3 style={{ color: "blue" }}>search result:</h3>

        {searchResult.map((item) => (
          <div>
            <p>{item.name}</p>
            <span>age: {item.age}</span>
          </div>
        ))}
      </h1>
    </div>
  );
};

export default App;
