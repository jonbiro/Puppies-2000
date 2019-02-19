import React from "react";
import PupCard from "../components/PupCard";
import SearchBar from "../components/SearchBar";

const PupCollection = props => {

  function pupCards(pups) {
    return pups.map((pup, i) =><> <PupCard key={i} pup={pup} handleClick={props.handleClick}/> <button onClick={() => props.handleDeletedPup(pup)}>Delete</button></>);
  }

	return (
	  <div>
      <SearchBar searchTerm={props.searchTerm} handleChange={props.handleSearchChange} />
  		<div>
  		  {pupCards(props.pups)}
  		</div>
	  </div>
	);
};

export default PupCollection;
