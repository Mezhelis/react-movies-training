import Loading from "../loading/Loading";
import MoviesItem from "./movies-item/MoviesItem";

const MoviesList = (props) => {
  const {
    title,
    movies,
    sizeMovies,
    loading = false
  } = props;

  const moviesList = movies.slice(0, sizeMovies).map((item) => {
    return (
      <MoviesItem
        key={item.id}
        id={item.id}
        poster={item.poster}
        title={item.title}
        rating={item.rating}
      />
    )
  })

  return (
    <section className="movies-list">
      <div className="container">
        <div className="movies-list__header">
          <h3 className="movies-list__title title">
            {title}:
          </h3>
        </div>
        {loading ?
          <Loading /> :
          <div className="movies-list__body">
            {moviesList}
          </div>
        }
        <hr />
      </div>
    </section>
  )
}

export default MoviesList;