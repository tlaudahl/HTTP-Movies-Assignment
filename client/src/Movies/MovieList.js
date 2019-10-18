import React, { Component } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => this.setState({ movies: res.data }))
      .catch(err => console.log(err.response));
  }

  setMovies = id => {
    const newArray = this.state.movies.filter(item => item.id !== id)
    this.setState({
      movies: newArray
    })
  }

  render() {
    return (
      <div>
        <div className="movie-list">
          {this.state.movies.map(movie => (
            <MovieDetails key={movie.id} movie={movie} setMovies={this.setMovies}/>
          ))}
        </div>
      </div>
    );
  }
}

function MovieDetails({ movie, setMovies }) {
  return (
      <MovieCard movie={movie} setMovies={setMovies} />
  );
}
