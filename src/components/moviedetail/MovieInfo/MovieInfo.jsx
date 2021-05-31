import ReactStars from "react-rating-stars-component";

const MovieInfo = (props) => {
  const {
    originalTitle,
    overview,
    genres,
    tagline,
    rating,
    runtime,
    budget,
    releaseDate,
    homepage,
  } = props;

  let genresList;
  if (genres) {
    genresList = genres.map((item) => {
      return (
        <li className="movie-info__genres-item" key={item.id}>
          {item.name}
        </li>
      )
    })
  }

  return (
    <section className="movie-info">
      <div className="container">
        <div className="movie-info__body">
          <div className="movie-info__row">
            <span className="movie-info__original-name">
              Оригинальное название: {originalTitle}
            </span>
            {tagline ?
              <span className="movie-info__tagline">
                {tagline}
              </span> :
              null
            }
            <p className="movie-info__desc">
              {overview}
            </p>
            <ul className="movie-info__genres-list">
              {genresList}
            </ul>
            {rating ?
              <ReactStars
                value={rating}
                edit={false}
                count={10}
                size={30}
                color="#6a717e"
                activeColor="#ffcb17"
                char="&#9679;"
              >
              </ReactStars> :
              null
            }
          </div>
          <div className="movie-info__row">
            <div className="detail-list">
              {runtime ?
                <div className="detail-item">
                  <p className="detail-item__title">
                    Длительность:
                  </p>
                  <p className="detail-item__info">
                    {runtime} мин.
                  </p>
                </div> :
                null
              }

              {budget ?
                <div className="detail-item">
                  <p className="detail-item__title">
                    Бюджет:
                  </p>
                  <p className="detail-item__info">
                    {budget}$
                  </p>
                </div> :
                null
              }

              {releaseDate ?
                <div className="detail-item">
                  <p className="detail-item__title">
                    Дата релиза:
                  </p>
                  <p className="detail-item__info">
                    {releaseDate}
                  </p>
                </div> :
                null
              }

              {homepage ?
                <div className="detail-item">
                  <p className="detail-item__title">
                    Страница проекта:
                  </p>
                  <p className="detail-item__info">
                    <a className="detail-item__link" href={homepage}>{originalTitle}</a>
                  </p>
                </div> :
                null
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieInfo;