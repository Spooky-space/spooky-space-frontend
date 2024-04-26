import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiConfig } from '../apiConfig.env';

const useHorrorMovies = () => {
    const [movies, setMovies] = useState([]);
    console.log(movies);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${apiConfig.baseURL}discover/movie`, {
                    params: {
                        api_key: apiConfig.api_key,
                        with_genres: 
                          '27,53'  // Genre ID for horror, thriller
                    },
                    headers: apiConfig.headers
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

    return { movies, isLoading, error };
};

export default useHorrorMovies;
