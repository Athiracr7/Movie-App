import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieDashboard from "./components/MovieDashboard";
import AddMovieForm from "./components/AddMovieForm";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import "./App.css"; // Import global styles

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/home" element={<MovieDashboard />} />
            <Route path="/add-movie" element={<AddMovieForm />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<MovieDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
