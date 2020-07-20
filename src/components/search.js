import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

function Search(props) {
  const [search, setSearch] = useState("");
  // const history = useHistory()

  const onClickSearch = (event) => {
    event.preventDefault();
    // history.push(`/search/${search}`)
    props.onClick(search)
  }

  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        onClick={onClickSearch}
        type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
