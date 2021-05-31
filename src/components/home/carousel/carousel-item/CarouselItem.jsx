import Icons from "../../../Icons/Icons";

const CarouselItem = (props) => {
  const {
    id,
    backPoster,
    title,
  } = props;

  const {
    isOpenModal
  } = props;

  return (
    <div className="carousel-movies-item">
      <div className="carousel-movies-item__img">
        <img src={backPoster} alt={title} />
      </div>

      <div className="carousel-movies-item__play-btn" onClick={() => isOpenModal(true, title, id)}>
        <Icons name="play-btn" className="carousel-movies-item__svg" />
      </div>

      <div className="carousel-movies-item__info">
        <h3 className="carousel-movies-item__title">{title}</h3>
      </div>
    </div>
  )
}

export default CarouselItem;