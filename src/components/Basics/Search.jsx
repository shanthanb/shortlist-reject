import React from "react";

const Search = (props) => {
  const { searchText, onChange } = props;

  return (
    <div className="searchBox">
      <input
        id="searchText"
        type="text"
        name="searchText"
        onChange={onChange}
        value={searchText}
        placeholder="Search Candidate"
      />
    </div>
  );
};

export default Search;
