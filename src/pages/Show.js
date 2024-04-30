import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { apiConfig } from "../apiConfig"

const Show = () => {
  const imageUrlBase = "https://image.tmdb.org/t/p/original"
  const smallImageUrlBase = "https://image.tmdb.org/t/p/w500"

  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`${apiConfig.baseURL}movie/${id}`, {
          params: { api_key: apiConfig.api_key },
          headers: apiConfig.headers,
        })
        setMovie(response.data)
      } catch (error) {
        console.error("failed to fetch movie", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchMovie()
  }, [id])

  if(isLoading)
  return
<div>
  Loading...
</div>

if(!movie)
return
<div>
  No movie found.
</div>

  return (
    <div className="show-body">
      <div className="img-container">
        <img src={imageUrlBase + movie.backdrop_path} 
        alt={movie.title} 
        style={{
          objectFit: "fill",
          width: "100%",
          height: "35vh",
          marginBottom: "15px"
        }}
        />
      </div>

      <div className="movie-info">
        <img src={smallImageUrlBase + movie.backdrop_path} 
          alt={movie.title}
          style={{
            objectFit: "fill",
            width: "150px",
            height: "250px",
            marginRight: "15px"
          }}
        />

        <div className="movie-details">
          <h1 className="movie-title">{movie.title}</h1>
          <p className="release-date">{movie.release_date}</p>
          <p>{movie.vote_average.toFixed(1)} /10</p>
        </div>
      </div>

        <div className="overview-container"> 
          <p className="overview">{movie.overview}</p>
        </div>
      
    </div>
  )
}


export default Show
