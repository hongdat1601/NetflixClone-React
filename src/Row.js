import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "./axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/w500";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        width: "100%",
        height: "390",
        playerVars: {
            autoplay: 1,
            origin: "https://localhost:3000",
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
            console.log("block");
        } else {
            movieTrailer(movie?.original_title || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.error(error));
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies &&
                    movies.map((movie) => (
                        <img
                            key={movie.id}
                            className={`row__poster ${
                                isLargeRow && "row__poster--large"
                            }`}
                            src={`${baseUrl}${
                                isLargeRow
                                    ? movie.poster_path
                                    : movie.backdrop_path
                            }`}
                            alt={movie.name}
                            onClick={() => handleClick(movie)}
                        />
                    ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
