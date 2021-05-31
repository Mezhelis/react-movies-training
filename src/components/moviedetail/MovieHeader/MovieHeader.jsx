import Icons from "../../Icons/Icons";

const MovieHeader = (props) => {
  const {
    backPoster,
    title,
    youtubeUrl,
    videoPlay,
    poster,
    rating
  } = props;

  const {
    isOpenModal
  } = props;

  let ratingtopic;
  if (rating && rating <= 3) {
    ratingtopic = 'movie-header__rating--low'
  } else if (rating > 3 && rating <= 7) {
    ratingtopic = 'movie-header__rating--average'
  } else if (rating > 7) {
    ratingtopic = 'movie-header__rating--high'
  }

  return (
    <section className="movie-header">
      <div className="container">
        <div className="movie-header__body">
          <div className="movie-header__back-poster-img">
            {backPoster ?
              <img src={backPoster} alt={title} /> :
              <Icons name="no-image" className="movie-header__back-poster-svg" />
            }
          </div>

          {videoPlay ?
            <div onClick={() => isOpenModal(true, title, null, youtubeUrl)} className="movie-header__play-btn">
              <Icons name="play-btn" className="movie-header__svg" />
            </div> :
            null
          }

          <div className="movie-header__info">
            <h3 className="movie-header__title">{title}</h3>
          </div>

          <div className="movie-header__poster">
            {poster ?
              <img src={poster} alt={title}
                className="movie-header__img" /> :
              <Icons name="no-image" className="movie-header__poster-svg" />
            }
            {rating ?
              <div className={"movie-header__rating " + ratingtopic}>TMDb: {rating}</div> :
              null
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieHeader;