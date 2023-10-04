import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import VideoTitle from "../components/VideoTitle";
import VideoBackground from "../components/VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <Box>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </Box>
  );
};

export default MainContainer;
