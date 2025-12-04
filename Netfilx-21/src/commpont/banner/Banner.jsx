import React, { useState, useEffect } from "react";
import axios from "../../utils/axios.js"; // Assuming './axios' is a custom instance
import requests from "../../utils/requsted.js"; // Assuming './requests' has API endpoints
import "./baner.css"; // Assuming the styles are in this file

function Banner() {
  // 1. State to hold the movie data for the banner
  const [movie, setMovie] = useState([]);

  // 2. useEffect hook to fetch a random Netflix Original movie on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request)
        // Set a random movie from the results array
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("Error fetching banner movie:", error);
      }
    }
    fetchData();
  }, []); // Empty dependency array ensures it runs once on mount

  // 3. Helper function to truncate/limit the length of the description text
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  // 4. Component JSX/Render
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {/* Use the truncate helper function for the overview */}
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      {/* A div for the bottom fade effect (typically in CSS) */}
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
