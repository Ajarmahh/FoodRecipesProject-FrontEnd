import React, {useState} from "react";

function SearchBar({onSearch}){
    const[query, setQuery]=useState('')

    function handleSearch(event){
        const value = event.target.value
        setQuery(value)
        onSearch(value)
    }


    return(
        <div className="search-container">
        <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleSearch}
        />
      </div>
      </div>
    )
}

export default SearchBar