import React from "react";

const PupDetails = props => {
  let { pup, handleLibrary } = props;

  return (
    <div className="ui segment">
      <h2>Breed Name: {pup.name}</h2>
      <p>
        <strong>Life Span: </strong>
        {pup.life_span}
      </p>
      <p>
        <strong>Bred For: {pup.bred_for}</strong>
        <br />
      </p>
      <p>
        <strong>Temperament: {pup.temperament}</strong>
      </p>
      <br />
      <p>
        <strong>
          {pup.breed_group ? pup.breed_group : null}
          <br />
          <br />
          {pup.origin ? pup.origin : null}
        </strong>
      </p>
      <br />
      <button onClick={handleLibrary.back}>Go Back</button>
      <button onClick={() => handleLibrary.enlist(pup)}>Add to Walk</button>
    </div>
  );
};

export default PupDetails;
