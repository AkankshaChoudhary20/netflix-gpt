import React from "react";
import { Box } from "@mui/material";

const VideoTitle = ({ title, overview }) => {
  return (
    <Box className="pt-60 px-12 absolute">
      <Box className="text-white font-bold text-5xl">{title}</Box>
      <Box className="w-3/6 py-10 text-white">{overview}</Box>
      <Box>
        <button className="p-4 px-6 mr-4 bg-white rounded-lg">Play</button>
        <button className="p-4 px-6 bg-gray-500 text-white rounded-lg">
          More Info
        </button>
      </Box>
    </Box>
  );
};

export default VideoTitle;
