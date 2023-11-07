import React from "react";
import { Box, Card } from "@mui/material";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <Card className="w-44 mr-2">
      <img alt="movie-card" src={IMG_CDN_URL + posterPath} />
    </Card>
  );
};

export default MovieCard;
