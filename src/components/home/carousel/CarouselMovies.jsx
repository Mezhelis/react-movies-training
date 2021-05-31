import { Carousel } from 'react-responsive-carousel';
import CarouselItem from './carousel-item/CarouselItem';

const CarouselMovies = (props) => {
  const {
    nowPlaying,
    size = 3,
  } = props;

  const {
    isOpenModal,
  } = props;

  const movies = nowPlaying.slice(0, size).map((item) => {
    return (
      <CarouselItem key={item.id} id={item.id} title={item.title} backPoster={item.backPoster} isOpenModal={isOpenModal} />
    )
  })

  return (
    <section className="carousel-movies">
      <div className="container">
        <Carousel
          autoPlay={true}
          interval={5000}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          className="carousel-movies__body"
        >
          {movies}
        </Carousel>
      </div>
    </section>
  )
}

export default CarouselMovies;