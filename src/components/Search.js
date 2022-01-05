import React,{useState} from "react";

function Search({  handleFormSubmit,setSearch,search }) {
    

  
function handleSubmit(e){
    e.preventDefault();
    handleFormSubmit();
}
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input
          value={search}
          type="text"
          id="search"
          name="name"
          placeholder="Type Podcast Name..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
