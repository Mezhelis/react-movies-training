import Genre from "./genre/Genre";

const Genres = (props) => {
  const {
    genres,
  } = props;

  const {
    getMovieByGenre,
  } = props;

  const genreList = genres.map((item) => {
    return (
      <Genre key={item.id} id={item.id} name={item.name} getMovieByGenre={getMovieByGenre} />
    )
  })

  return (
    <section className="genres">
      <div className="container">
        <div className="genres__body">
          <ul className="genres__list">
            {genreList}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Genres;