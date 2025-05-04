import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(category, location);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Enter Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
// dqwAwdqwdSF QDFVWFNSH;DSFUIS.FGesfjb,hgljgyglyuyf;lkcnsdc nsdjsdnc;sjasvsd voiddf sdhsdcs;audaa