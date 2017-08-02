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
  constuctor(props) {
    // super(props);
    this.state = {
      value: "Search here!"
    }
  }

  handleSearchClick (video) {
    // event.preventDefault();
    // console.log('clicked!')
    console.log(video);
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Movie List</h2>
        <div>
          <Search handleSearchClick={this.handleSearchClick.bind(this)}/>
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
    <input id="input-box" ></input>
    <button id="submit-button" 
    onClick={() => {props.handleSearchClick(document.getElementById('input-box').value)}}
    >Submit</button>
  </form>
  </div>
);

window.App = App;
export default App;



