import React from "react";
import { Box } from "@mui/material";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <Box className="bg-black">
      <MovieList
        title={"Now Playing Movies"}
        movies={movies?.nowPlayingMovies}
      />
      <MovieList title={"Popular Movies"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Comic Movies"} movies={movies?.nowPlayingMovies} />
      <MovieList
        title={"Motiovational Movies"}
        movies={movies?.nowPlayingMovies}
      />
    </Box>
  );
};

export default SecondaryContainer;
