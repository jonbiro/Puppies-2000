import React from "react";
import PupCollection from "./PupCollection";
import PupsGoingOnAWalk from "./PupsGoingOnAWalk";
import PupDetails from "../components/PupDetails";
import PupForm from "../components/PupForm";

class PupsPage extends React.Component {
  state = {
    pups: [],
    walkingPups: [],
    specView: false,
    currentPup: null,
    searchTerm: ""
  };

  componentDidMount() {
    fetch("https://api.TheDogAPI.com/v1/breeds", {
      method: "GET",
      headers: {
        "x-api-key": "3deef0ea-1e8b-4ac6-b3ec-9f7346588af7"
      }
    })
      .then(res => res.json())
      .then(pups => {
        this.setState({
          pups: pups
        });
      });
  }

  displayCurrentView(specsView) {
    if (specsView) {
      return (
        <PupDetails
          pup={this.state.currentPup}
          handleLibrary={{ enlist: this.addPup, back: this.toggleCurrentView }}
          handleDeletedPup={this.handleDeletedPup}
        />
      );
    } else {
      return (
        <PupCollection
          pups={this.filteredPups(this.state.searchTerm)}
          handleClick={this.setCurrentPup}
          handleSearchChange={this.updateSearchTerm}
          handleDeletedPup={this.handleDeletedPup}
        />
      );
    }
  }

  filteredPups(searchTerm) {
    return this.state.pups.filter(pup =>
      pup.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  updateSearchTerm = e => {
    this.setState({ searchTerm: e.target.value }, () =>
      console.log(this.state.searchTerm)
    );
  };

  addPup = pup => {
    const newPups = Array.from(new Set([...this.state.walkingPups, pup]));
    this.setState({ walkingPups: newPups });
  };

  removePup = deletePup => {
    const newPups = this.state.walkingPups.filter(pup => pup.id !== deletePup.id);
    this.setState({ walkingPups: newPups });
  };

  toggleCurrentView = () => {
    let specView = !this.state.specView;
    this.setState({ specView });
  };

  setCurrentPup = currentPup => {
    this.setState({ currentPup });
    this.toggleCurrentView();
  };

  newPup = pup => {
    this.setState({ pups: [...this.state.pups, pup] });
  };

  handleDeletedPup = deletedPup => {
    let puppies = this.state.pups.filter(pup => pup.id !== deletedPup.id);
    this.setState({ pups: puppies });
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>Pups Going on a Walk:</h2>
        <br />
        <PupsGoingOnAWalk
          pups={this.state.walkingPups}
          handleClick={this.removePup}
        />
        <br />
        <hr />
        {this.displayCurrentView(this.state.specView)}
        <br />
        <hr />
        <PupForm state={this.state.pups} newPup={this.newPup} />
      </div>
    );
  }
}

export default PupsPage;
