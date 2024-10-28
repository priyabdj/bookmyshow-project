
import React from "react";
import "./MovieCard.css"; 

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="card-image">
        <img src={movie.image} alt={movie.title} />
        {movie.promoted }
      </div>
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-rating">
        <span className={movie.rating >= 7 ? "high-rating" : "low-rating"}>
          {movie.rating}/10
        </span>{" "}
        {movie.votes} Votes
      </p>
      <p className="movie-genre">{movie.genre}</p>
    </div>
  );
};

export default MovieCard;
