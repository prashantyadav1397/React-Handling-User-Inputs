import React from "react";

class SearchBar extends React.Component {
  // user input handler
  //   onInputChange(event) {
  //   event.target.value contains the data from the user input via keyboard
  //     console.log(event.target.value);
  //   }

  //   onInputClick() {
  //     console.log("clicked");
  //   }

  // using state to handle controlled event from user input
  state = { term: "" };

  //  disabling the default behavior of form with a onSubmit method
  // changing the onFormSubmit method to arrow function to avoid error state of "can't read the property of undefined"
  onFormSubmit = (event) => {
    event.preventDefault();

    // callback to the parent function defined in the App class component
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        {/* disable the default form behavior of submitting the input and
        resetting the input */}
        {/* // handling inline directly with a callback function
        <form onSubmit={(e) => e.preventDefault()} className="ui form"></form> */}
        {/* Handling with function */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Enter text to search"
              //   onClick={this.onInputClick}
              // function to read the value change in the input text field
              //   onChange={this.onInputChange}
              // or
              // onChange ={e=>console.log(e.target.value)}

              //handling event with controlled input using state
              // controlling the input type
              //   value={this.state.term.toUpperCase()}
              value={this.state.term}
              // input type change can be handled at the onChange() level as well
              //   onChange={(e) => {
              //     this.setState({ term: e.target.value.toUpperCase() });
              //     console.log(this.state.term);
              //   }}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />

            <input
              value="Reset"
              type="button"
              className="ui button"
              style={{
                backgroundColor: "black",
                color: "white",
                paddingTop: "10px",
                marginTop: "10px",
              }}
              onClick={(e) => {
                this.setState({ term: "" });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

//other event handler
// onChange()
// onClick()
// onSubmit()
