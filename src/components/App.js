import React, { useState } from "react";

import "../styles/App.css";

const data = {
  2018: ["Avengers 1", "Now you see me", "Fast and Furious 7"],
  2019: ["Avengers 2", "Now you see me 2", "Fast and Furious 8"],
  2020: [
    "Final Avengers Movie(Iron man dies)",
    "Now you finally used Lenskart",
    "Covid Came",
  ],
  2021: ["Covid Returns"],
  2022: ["Adventures of Saiman", "Adventures of Shaktiman"],
};

const App = () => {
  const [year, setYear] = useState(null);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const keys = Object.keys(data);

  const keysWithNullOption = [null, ...keys];

  const renderSelectedYear = () => {
    if (year === null) {
      return "No year selected";
    }

    return `Selected year-${year}`;
  };

  return (
    <div id="main">
      <select name="year" onChange={handleYearChange}>
        {keysWithNullOption.map((key) => (
          <option value={key} selected={key === year}>
            {key}
          </option>
        ))}
      </select>

      <div id="selected-year">{renderSelectedYear()}</div>

      <ul>{data[year] && data[year].map((movie) => <li>{movie}</li>)}</ul>
    </div>
  );
};

export default App;
