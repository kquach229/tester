import React, { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} title="dummySearch" />
    </div>
  );
};

export default Search;
