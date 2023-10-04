import React, { useEffect } from "react";
import Header from "./layouts/Header";
import { Box } from "@mui/material";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <Box>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </Box>
  );
};

export default Browse;
