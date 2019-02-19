import React from "react";
import PupCard from "../components/PupCard";

class PupsGoingOnAWalk extends React.Component {
  pupCards(pups) {
    return pups.map((pup, i) => (
      <PupCard key={i} pup={pup} handleClick={this.props.handleClick} />
    ));
  }

  render() {
    return <div>{this.pupCards(this.props.pups)}</div>;
  }
}

export default PupsGoingOnAWalk;
