import React from "react";
import { Box } from "@mui/material";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useMovieTrailer(movieId);

  return (
    <Box>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailer.key + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </Box>
  );
};

export default VideoBackground;
