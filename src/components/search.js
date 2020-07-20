import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { getSearchPlants } from '../action/actionCreator'
import { useHistory } from "react-router-dom";

function Search(props) {
  const [search, setSearch] = useState("");
  const history = useHistory()

  const onClickSearch = (event) => {
    event.preventDefault();
    history.push(`/search/${search}`)
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

const msp = state => {
  return {
    searchPlants: state.searchPlants
  }
}

const mdp = dispatch => {
  return {
    getSearchPlants: (searchInput) => dispatch(getSearchPlants(searchInput))
  }
}

export default connect(msp, mdp)(Search);
