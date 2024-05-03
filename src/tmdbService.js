import { useState, useEffect } from "react";
import axios from "axios";
import { apiConfig } from "./apiConfig.js";

const genreList = [
	{ 28: "Action" },
	{ 12: "Adventure" },
	{ 16: "Animation" },
	{ 35: "Comedy" },
	{ 80: "Crime" },
	{ 99: "Documentary" },
	{ 18: "Drama" },
	{ 10751: "Family" },
	{ 14: "Fantasy" },
	{ 36: "History" },
	{ 27: "Horror" },
	{ 10402: "Music" },
	{ 9648: "Mystery" },
	{ 10749: "Romance" },
	{ 878: "Science_Fiction" },
	{ 10770: "TV_Movie" },
	{ 53: "Thriller" },
	{ 10752: "War" },
	{ 37: "Western" },
];

const useHorrorMovies = () => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMovies = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get(`${apiConfig.baseURL}discover/movie`, {
					params: {
						api_key: apiConfig.api_key,
						with_genres: "27,53", // Genre ID for horror and thriller
					},
					headers: apiConfig.headers,
				});
				setMovies(response.data.results);
				setError(null);
			} catch (err) {
				setError(err);
				setMovies([]);
			} finally {
				setIsLoading(false);
			}
		};

		fetchMovies();
	}, []);

	return { movies, isLoading, error, genreList };
};

export default useHorrorMovies;
