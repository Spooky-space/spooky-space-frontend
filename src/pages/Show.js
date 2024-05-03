import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { apiConfig } from "../apiConfig"
import { Comment, Form, Button, Header } from "semantic-ui-react"
import spookyUser from "../assets/spooky.png"
import useHorrorMovies from "../tmdbService"
import AddMovie from "./AddMovie"


const Show = () => {
  const imageUrlBase = "https://image.tmdb.org/t/p/original"
  const smallImageUrlBase = "https://image.tmdb.org/t/p/w500"

	const { genreList } = useHorrorMovies()
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [comments, setComments] = useState([])
  const [commentText, setCommentText] = useState("")

  
  useEffect(() => {
    fetchMovie()
  }, [id])

  const fetchMovie = async () => {
    try {
      const response = await axios.get(`${apiConfig.baseURL}movie/${id}`, {
        params: { api_key: apiConfig.api_key },
        headers: apiConfig.headers,
      })
      setMovie(response.data)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddComments = () => {
    const newComment = {
      id: comments.length + 1,
      text: commentText,
      date: new Date()
    }
    setComments([...comments, newComment])
    setCommentText("")
  }

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
      <div className="show-background">
      <div className="show-background-shadow" />
      <div className="show-background-image" style={{
        backgroundImage: `url(${imageUrlBase + movie.backdrop_path})`,
      }} />
      </div>

      <div className="movie-info">
        <img src={smallImageUrlBase + movie.poster_path} 
          alt={movie.title}
          style={{
            objectFit: "cover",
            width: "200px",
            height: "300px",
            marginRight: "15px",
          }}
        />

        <div className="movie-details">
          <h1 className="movie-title">{movie.title}</h1>
          <p className="release-date">{movie.release_date}</p>
          <p className="run-time">{movie.runtime} Minutes</p>
          <p>{movie.vote_average.toFixed(1)} /10</p> 
          <p className="movie-genre">{movie.genres[0].name}</p>
          <p className="movie-genre">{movie.genres[1].name}</p>
          <p className="movie-genre">{movie.genres[2].name}</p>
        </div>
      </div>

        <div className="overview-container"> 
          <p className="overview">{movie.overview}</p>
        </div>

        <div className="comment-section">
          <Comment.Group>
            <Header as='h3' dividing>Comments</Header>

            <Form reply>
              <Form.TextArea value={commentText} 
              onChange={(e) => setCommentText(e.target.value)}
              style={{
                background: "rgba(10,10,10,0.7)",
                color: "whitesmoke"
              }}
              />
              <Button content="Add A Comment" labelPosition="left" icon="edit" primary onClick={handleAddComments} />
            </Form>
              <br />

            {comments.map(comment => (
              <Comment key={comment.id}
              style={{
                width: "100%",
                border: "2px solid whitesmoke",
                borderRadius: "10px",
                padding: "0"
              }}
              >
                <div
                  style={{
                    height: "5vh !important", 
                    
                  }}
                >
                  
                  <Comment.Metadata
                  style={{
                    color: "whitesmoke",
                    width: "100%"
                  }}
                  >

                    <div style={{display: "flex", alignItems: "flex-end", width: "100% !important", height: "10% !important"}}>
                      <img src={spookyUser} style={{objectFit: "scale-down", height: "50px", borderRadius: "50%"}} /> 
                      <h2 style={{fontFamily: "Metal Mania", marginBottom: "5px", padding: "0 5px"}}>{"Seth"}</h2>{" "}<p style={{fontFamily: "Cinzel", marginBottom: "10px"}}>{comment.date.toLocaleString()}</p></div>
                  </Comment.Metadata>
                  <Comment.Text 
                  style={{
                    margin: ".5em", 
                    color: "whitesmoke",
                    fontFamily: "Cinzel",
                    fontSize: "20px"
                  }}
                >{comment.text}</Comment.Text>
                </div>
              </Comment>
            ))}
          </Comment.Group>
          <AddMovie movie={movie} />
        </div>
    </div>
  )
}


export default Show
