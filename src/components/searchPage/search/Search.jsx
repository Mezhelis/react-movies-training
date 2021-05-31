import { useHistory } from "react-router";

const Search = (props) => {
  const {
    search,
  } = props;

  const {
    handleOnSubmit,
    handleOnChange
  } = props;

  let history = useHistory();

  return (
    <div className="search">
      <form onSubmit={(e) => {
        handleOnSubmit(e, search);
        history.push("/search");
      }}>
        <input
          type="search"
          className="search__input"
          placeholder="Поиск..."
          value={search}
          onChange={handleOnChange}
        />
      </form>
    </div>
  )
}

export default Search;