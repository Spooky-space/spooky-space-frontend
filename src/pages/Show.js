import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { apiConfig } from "../apiConfig"

const Show = () => {
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
    <div>
      <h1>{movie.title}</h1>
      {/* <p>{movie.over}</p> */}
    </div>
  )
}


export default Show
