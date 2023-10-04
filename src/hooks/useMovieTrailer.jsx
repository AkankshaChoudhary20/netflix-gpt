import { useEffect, useState } from "react";

import { API_OPTIONS } from "../utils/constant";

function useMovieTrailer(movieId) {
  const [trailerId, setTrailerId] = useState("");

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results?.[0];

    setTrailerId(trailer);
  };
  useEffect(() => {
    getMovieVideo();
  }, []);

  return trailerId;
}

export default useMovieTrailer;
