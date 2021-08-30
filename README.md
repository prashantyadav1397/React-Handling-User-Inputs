## Handling User Inputs using Forms and Events

### Using state to handle controlled event from user input

<br/> state = { term: "", password: "" };
<br/>
<input type="text" placeholder="Enter text to search" value={this.state.term} onChange={(e) =>{this.setState({ term: e.target.value });}} />

### props communicate from parent to child state

### Handling Communication of child to parent

<p> convert functional App parent component to a class based component and grab the event using a callback</p>
<p>
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

use the props inside the child to grab the value from user input and pass up the hierarchy

this.props.onSubmit(this.state.term);

</p>

### Data loading from the API

React App --> AJAX Client ---> Send request with data ---> API ---> response back to AJAX client

1. axios - npm package
2. fetch - built in modern browsers

<h3>getting Data using axios</h3>
<p>axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID <API Access Key>",
      },
    });</p>

### Async await and .then()

Either use async await or .then() to return the promise returned

Async- await
async onSearchSubmit(term) {
const resopnse = await axios.get('',{})
}

.then
onSearchSubmit(term){
axios.get('',{}).then();
}
