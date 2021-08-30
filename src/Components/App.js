import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  // method for getting a callback from the child to pass the data up the hierarchy
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
