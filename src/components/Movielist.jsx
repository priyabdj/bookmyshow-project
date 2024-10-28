
import React from "react";
import MovieCard from "./MovieCard";
import "./Movielist.css"; 

const movies = [
  {
    title: "Bhool Bhulaiyaa 3",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6f/Bhool_bhulaiyaa.jpg",
    rating: 8.1,
    votes: "590.9K Likes",
    genre: "Comedy/Horror",
    promoted: true,
  },
  {
    title: "Venom: The Last Dance",
    image: "https://m.media-amazon.com/images/M/MV5BNTYwMDg5MDItNjhmZi00NmVmLThjNWItMmNkMjVkMWRhNzI2XkEyXkFqcGc@._V1_.jpg",
    rating: 8.1,
    votes: "33.8K Votes",
    genre: "Action/Adventure/Sci-Fi",
    promoted: false,
  },
  {
    title: "Vicky Vidya ka Woh Wala Video",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4e/Vicky_Vidya_Ka_Woh_Wala_Video.jpg",
    rating: 7.0,
    votes: "27.9K Votes",
    genre: "Comedy/Drama/Period",
    promoted: false,
  },
  {
    title: "Jigra",
    image: "https://m.media-amazon.com/images/M/MV5BNmJhMTc5NDEtN2NkOC00Njc3LWJiMzgtZjhjZWNhZDhmZTE0XkEyXkFqcGc@._V1_.jpg",
    rating: 7.6,
    votes: "58.3K Votes",
    genre: "Action/Drama/Thriller",
    promoted: false,
  },
  {
    title: "Bandaa Singh Chaudhary",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYgkQvNrJH1PjiibPLuAV_cOQ78oi6epFp6A&s",
    rating: 6.2,
    votes: "6K Votes",
    genre: "Action/Drama",
    promoted: false,
  },

  
];

const MovieList = () => {
  return (
    <div className="movie-list">
      <h2 className="recommend">Recommended Movies</h2>
      <div className="movies-container">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
