## Handling User Inputs using Forms and Events

<br/>

### using state to handle controlled event from user input

<br/> state = { term: "", password: "" };
<br/>
<input type="text" placeholder="Enter text to search" value={this.state.term} onChange={(e) =>{this.setState({ term: e.target.value });}} />
