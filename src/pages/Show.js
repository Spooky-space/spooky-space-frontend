import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { apiConfig } from "../apiConfig"
import { Comment, Form, Button, Header } from "semantic-ui-react"

const Show = () => {
  const imageUrlBase = "https://image.tmdb.org/t/p/original"
  const smallImageUrlBase = "https://image.tmdb.org/t/p/w500"

  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [comments, setComments] = useState([])
  const [commentText, setCommentText] = useState("")


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

        <div className="comment-section">
          <Comment.Group>
            <Header as='h3' dividing>Comments</Header>

            <Form reply>
              <Form.TextArea value={commentText} 
              onChange={(e) => setCommentText(e.target.value)}
              />
              <Button content="Add A Comment" labelPosition="center" icon="edit" primary onClick={handleAddComments} />
            </Form>

            {comments.map(comment => (
              <Comment key={comment.id}>
                <Comment.Content>
                  <Comment.Text>{comment.text}</Comment.Text>
                  <Comment.Metadata>
                    <div>{comment.date.toLocaleString()}</div>
                  </Comment.Metadata>
                </Comment.Content>
              </Comment>
            ))}
          </Comment.Group>
        </div>
    </div>
  )
}


export default Show
