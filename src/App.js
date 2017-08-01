import React, { Component } from 'react';
import './App.css';



var movies = [
  'Mean Girls',
  'Hackers',
  'The Grey',
  'Sunshine',
  'Ex Machina'
];

// returnMovies = (movies) => {
//   var titles = [];
//    movies.map( (movie) => {
//       titles.push(movie.title);
//   });
//   return titles;
// }

var MovieListEntry = (props) => (
  <div className="move-list-entry">
  {props.movie}
  </div>
)

// var MovieList = (props) => (
//   <div>
//   {props.movies.map((movie, index) => (
//     <MovieListEntry movie={movie}  />
//     )
//     )}
//   </div>
//   );

class App extends Component {
  constuctor(props) {
    // super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Movie List</h2>
        </div>
  {movies.map((movie, index) => (
    <MovieListEntry movie={movie} key={index} />
    )
    )}
      </div>
    );
  }
}

window.App = App;
export default App;



