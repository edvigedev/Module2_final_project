import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MovieDetails from "./pages/MovieDetails";
import AboutDirector from "./pages/AboutDirector";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movie from "./components/Movie";
import { useEffect, useState } from "react";
import axios from "axios";
import RandomCrush from "./pages/RandomCrush";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getAllTheMovies = async () => {
      try {
        const { data } = await axios.get("http://localhost:5005/movies");
        console.log(data);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllTheMovies();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Homepage movies={movies} setMovies={setMovies} />}
        />
        <Route
          path="/MovieDetails/:movieId"
          element={<MovieDetails movies={movies} setMovies={setMovies} />}
        />
        <Route path="/AboutDirector" element={<AboutDirector />} />
        <Route path="/RandomCrush" element={<RandomCrush />} />
      </Routes>
      <Movie> </Movie>
      <Footer />
    </>
  );
}

export default App;
