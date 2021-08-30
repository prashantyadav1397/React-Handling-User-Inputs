import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../API/Unsplash";
import ImageList from "./ImageList";
import SearchBank from "./SearchBank";
import BanksList from "./BanksList";
import bank from "../API/Bank";

class App extends React.Component {
  // adding state to the component to handle reponse  from async requests
  state = { images: [], branches: [] };
  // method for getting a callback from the child to pass the data up the hierarchy
  onSearchSubmit = async (term) => {
    if (term === "") {
      this.setState({ images: [] });
    } else {
      // console.log(term);
      // Calling axios directly
      // const response = await unsplash.get("https://api.unsplash.com/search/photos", {

      // calling the API with a predefined config setup
      const response = await unsplash.get("/search/photos", {
        params: { query: term },

        // moving common config to a specific file - helps code clean up and avoid un-necessary output of details like keys
        // headers: {
        //   Authorization: "Client-ID pCwFppU6-rRuHZaQ2oBpv7le1USkf_1el13xU-N_qPI",
        // },
      });
      //  .then return the promise
      // .then((response) => {
      //   console.log(response.data.results);
      // });

      // User can use either .then for a callback to return a promise or use async await to get the results
      console.log(response.data.results);
      this.setState({ images: response.data.results });
    }
  };

  onSearchBankSubmit = async (cityName) => {
    const response = await bank.get(`/api/branches/city/${cityName}/limit/3`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    console.log(response.branches);
    this.setState({ branches: response.branches });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        <SearchBank onSubmit={this.onSearchBankSubmit} />
        <BanksList branches={this.state.branches} />
      </div>
    );
  }
}

export default App;
