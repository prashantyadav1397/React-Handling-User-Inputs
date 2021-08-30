import React from "react";

class SearchBank extends React.Component {
  state = { text: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.text);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Bank Search</label>
            <input
              type="text"
              placeholder="Enter city to search bank details"
              value={this.state.text}
              onChange={(event) => {
                this.setState({ text: event.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBank;
