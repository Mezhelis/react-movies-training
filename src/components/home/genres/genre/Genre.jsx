const Genre = (props) => {
  const {
    id,
    name,
  } = props;

  const {
    getMovieByGenre
  } = props;

  return (
    <li className="genre">
      <button className="genre__btn" onClick={() => {
        getMovieByGenre(id);
      }}>
        {name}
      </button>
    </li>
  )
}

export default Genre;