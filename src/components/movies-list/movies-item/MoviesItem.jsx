import { Link } from "react-router-dom"
import Icons from "../../Icons/Icons";

const MoviesItem = (props) => {
  const {
    id,
    poster,
    title,
    rating
  } = props;

  let ratingtopic;
  if (rating && rating <= 3) {
    ratingtopic = 'movies-item__rating--low'
  } else if (rating > 3 && rating <= 7) {
    ratingtopic = 'movies-item__rating--average'
  } else if (rating > 7) {
    ratingtopic = 'movies-item__rating--high'
  }

  return (
    <div className="movies-item">
      <Link to={`/movie/${id}`}>
        <div className="movies-item__body">
          <div className="movies-item__img">
            {poster ?
              <img src={poster} alt={title} /> :
              <Icons name="no-image" className="movies-item__svg" />
            }

          </div>
          <div className="movies-item__info">
            <h6 className="movies-item__title">{title}</h6>
            {rating ?
              <div className={"movies-item__rating " + ratingtopic}>TMDb: {rating}</div> :
              null
            }
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MoviesItem;