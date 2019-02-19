import React from "react";

const SearchBar = props => {

	return (
	  <div className="ui four column grid">
  		<div className="row">
  		  <input type="text" value={props.searchTerm} onChange={props.handleChange} placeholder="Search By Name"/><hr/>
  		</div>
	  </div>
	);
};

export default SearchBar;
