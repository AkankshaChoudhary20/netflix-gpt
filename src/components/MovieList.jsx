import React from "react";
import { Box, Typography } from "@mui/material";
import MovieCard from "./ MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <Box>
      <Box className="ml-2 p-2 text-white">
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box className="flex overflow-x-scroll p-2">
        <Box className="flex pl-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MovieList;
