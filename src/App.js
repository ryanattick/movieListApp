import React, { Component } from 'react';
import './App.css';



var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

// document.getElementById("input-box").value


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Search here!"
    }
  }

  handleSearchClick (event) {
    // e.preventDefault();
    // console.log('clicked!')
    // console.log(event.target.value);
    this.setState({
      value: event.target.value
    })
    console.log(this.state.value)
  };

  clearValue () {
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Movie List</h2>
        <div>
          <Search clearValue={this.clearValue.bind(this)}value={this.state.value}handleSearchClick={this.handleSearchClick.bind(this)}/>
        </div>
        </div>
  {movies.map((movie, index) => (
    <MovieListEntry movie={movie.title} key={index} />
    )
    )}
      </div>
    );
  }
}

var MovieListEntry = (props) => (
  <div className="move-list-entry">
  {props.movie}
  </div>
);

var Search = (props) => (
  <div>
  <form>
    <input id="input" value={props.value} onClick={() => props.clearValue()}onChange={(event) => {props.handleSearchClick(event)}}></input>
    <p id="submit-button" 
    onClick={(event) => {props.handleSearchClick(event)}}
    >Submit</p>
  </form>
  </div>
);

window.App = App;
export default App;



