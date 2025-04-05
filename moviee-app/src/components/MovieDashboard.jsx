import React, { useState } from "react";
import "./MovieDashboard.css";
import moviesData from "./moviesData.json"; // ✅ Correct import

const MovieDashboard = () => {
  const [movies] = useState(moviesData); // Load movies from JSON file

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">🎬 Movie Dashboard</h2>

      {/* Movie Grid */}
      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <h3>{movie.moviename}</h3>
              <p className="movie-rating">⭐ {movie.rating}/10</p>
            </div>
          ))
        ) : (
          <p className="no-movies-text">No movies available.</p>
        )}
      </div>
    </div>
  );
};

export default MovieDashboard;
