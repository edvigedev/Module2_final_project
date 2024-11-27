import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MovieDetails from "./pages/MovieDetails";
import AboutDirector from "./pages/AboutDirector";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movie from "./components/Movie";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import RandomCrush from "./pages/RandomCrush";
import Tarantino from "./pages/Tarantino";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
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
      <main className={darkTheme ? "dark" : ""}>
        <Navbar
          movies={movies}
          setMovies={setMovies}
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                movies={movies}
                setMovies={setMovies}
                darkTheme={darkTheme}
                setDarkTheme={setDarkTheme}
              />
            }
          />
          <Route
            path="/MovieDetails/:movieId"
            element={
              <MovieDetails
                movies={movies}
                setMovies={setMovies}
                darkTheme={darkTheme}
              />
            }
          />
          <Route path="/AboutDirector" element={<AboutDirector />} />
          <Route
            path="/Tarantino"
            element={<Tarantino darkTheme={darkTheme} />}
          />
          <Route
            path="/RandomCrush"
            element={
              <RandomCrush
                movies={movies}
                setMovies={setMovies}
                darkTheme={darkTheme}
              />
            }
          />
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default App;
