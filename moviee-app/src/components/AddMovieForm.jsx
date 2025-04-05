import React, { useState } from "react";
import "./AddMovieForm.css"; // Import CSS file for styling

const AddMovieForm = () => {
  const [moviename, setMoviename] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState("");

  const handleAddMovie = (e) => {
    e.preventDefault();

    // Validation
    if (!moviename || !description || !rating) {
      setError("All fields are required!");
      return;
    }
    if (rating < 1 || rating > 10) {
      setError("Rating must be between 1 and 10!");
      return;
    }

    // Movie object to be added (mock functionality)
    console.log({ moviename, description, rating });

    // Clear form and error message
    setMoviename("");
    setDescription("");
    setRating("");
    setError("");
  };

  return (
    <div className="add-movie-container">
      <h2>Add Movie</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleAddMovie} className="movie-form">
        <input
          type="text"
          placeholder="Movie Name"
          value={moviename}
          onChange={(e) => setMoviename(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rating (1-10)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
