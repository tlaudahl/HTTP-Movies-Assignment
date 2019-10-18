import React from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';


const MovieCard = props => {
  console.log('Movie Card Props', props);
  const { title, director, metascore, stars, id } = props.movie;
  

  const deleteMovie = () => {
    Axios.delete(`http://localhost:5000/api/movies/${id}`)
      .then(res => props.setMovies(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div className="movie-card">
      <Link to={`/movies/${id}`}>
        <h2>{title}</h2>
      </Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      <Link to={`/update-movie/${id}`}><div className='update-button'>Update</div></Link>
      <div className='delete-button' onClick={deleteMovie}>Delete</div>
    </div>
  );
};

export default MovieCard;
