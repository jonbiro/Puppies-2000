import React from "react";

const PupCard = props => {
  const { pup } = props;

  return (
    <div>
      <div
        key={pup.id}
        onClick={() => props.handleClick(props.pup)}
      >
        <div>
          <div>{pup.name}</div>
        </div>
      </div>
    </div>
  );
};

export default PupCard;
