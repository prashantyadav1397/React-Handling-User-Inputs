import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  // adding state to the component to handle reponse  from async requests
  state = { images: [] };
  // method for getting a callback from the child to pass the data up the hierarchy
  onSearchSubmit = async (term) => {
    // console.log(term);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID pCwFppU6-rRuHZaQ2oBpv7le1USkf_1el13xU-N_qPI",
      },
    });
    //  .then return the promise
    // .then((response) => {
    //   console.log(response.data.results);
    // });

    // User can use either .then for a callback to return a promise or use async await to get the results

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found {this.state.images.length} images
      </div>
    );
  }
}

export default App;
