import { useForm } from "react-hook-form"
import { Col, Form, FormGroup, Label, Row } from "reactstrap"
import { useNavigate } from "react-router-dom"

const EditList = ({ updateList, user, movie }) => {
  const navigate = useNavigate()
  const preloadedValues = {
    tmdb_api_id: 0,
    watched: false,
    rating: 0,
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: preloadedValues })

  const onSubmit = (editList) => {
    editList.user_id = user.id
    updateList(editList)
    navigate("/myMovieList")
  }

  return (
    <div className="page-body">
      <h3 className="title-header center-content">Edit Movie status</h3>
      <Form onSubmit={handleSubmit(onSubmit)} className="form-size">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="movie-id">{movie.id}</Label>
              <input
                id="movie-id"
                name="movie-id"
                placeholder="Movie ID"
                type="integer"
                className="form-control"
                {...register("movie-id", { required: true })}
              />
              {errors.unit && (
                <span className="form-validations">Movie ID is required</span>
              )}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup check>
              <input name="not-watched" type="radio" />{" "}
              <Label check>I haven't seen this movie yet</Label>
            </FormGroup>
            <FormGroup check>
              <input name="watched" type="radio" />{" "}
              <Label check>I've watched this movie</Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="rating"></Label>
              {movie.watched && (
                <input
                  className="form-control"
                  id="rating"
                  name="rating"
                  type="select"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </input>
              )}
            </FormGroup>
          </Col>
        </Row>
        <div className="center-content">
          <button onClick={handleSubmit} className="nav-button">
            Submit
          </button>
        </div>
      </Form>
    </div>
  )
}

export default EditList
