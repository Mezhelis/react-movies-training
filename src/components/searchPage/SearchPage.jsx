import Loading from "../loading/Loading";
import MoviesList from "../movies-list/MoviesList";
import Pagination from "./pagination/Pagination";

const SearchPage = (props) => {
  const {
    searchQuery,
    searchResult,
    searchResultPages,
    searchActivePage,
    loading = false
  } = props;

  const {
    onPageChanged,
  } = props;

  return (
    <section className="search-page">
      <div className="container">
        <div className="search-page__body">
          {loading ?
            <Loading /> :
            <MoviesList title="Результат поиска" movies={searchResult} sizeMovies={20} />
          }
        </div>
      </div>
      <Pagination searchQuery={searchQuery} onPageChanged={onPageChanged} searchResultPages={searchResultPages} searchActivePage={searchActivePage} />
    </section>
  )
}

export default SearchPage;