import React from "react";
import PupCard from "../components/PupCard";

class PupsGoingOnAWalk extends React.Component {
  pupCards(pups) {
    return pups.map((pup, i) => (<div><br/>
      <PupCard key={i} pup={pup} handleClick={this.props.handleClick}  /></div>
    ));
  }

  render() {
    return <div><br /><br />{this.pupCards(this.props.pups) }</div>;
  }
}

export default PupsGoingOnAWalk;
