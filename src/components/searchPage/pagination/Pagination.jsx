import Icons from "../../Icons/Icons";

const Pagination = (props) => {
  const {
    searchQuery,
    searchResultPages,
    onPageChanged,
    searchActivePage
  } = props;

  const paginationActive = () => {
    let sizeArray = searchResultPages > 3 ? 3 : searchResultPages;
    if (searchActivePage <= 3) {
      sizeArray = 4;
    }

    return new Array(sizeArray).fill('').map((item, index) => {
      return (
        searchActivePage + index - 1 > 1 &&
          searchActivePage + index - 1 < searchResultPages ?
          <li key={index} className="pagination__item">
            <button className={"pagination__btn " + (searchActivePage === searchActivePage + index - 1 ? "pagination__btn--active" : null)} onClick={() => { onPageChanged(searchQuery, searchActivePage + index - 1) }}>
              {searchActivePage + index - 1}
            </button>
          </li> : null
      )
    })
  }

  return (
    <div className="pagination">
      <div className="container">
        <div className="pagination__body">
          <ul className="pagination__list">
            <li className="pagination__item">
              <button className={"pagination__btn " + (searchActivePage === 1 ? "pagination__btn--active" : null)} onClick={() => { onPageChanged(searchQuery, 1) }}>
                {1}
              </button>
            </li>

            {searchActivePage > 3 ?
              <li className="pagination__item">
                <button className="pagination__btn" onClick={() => { onPageChanged(searchQuery, searchActivePage - 1) }}>
                  <Icons name="arrow-prev" className="pagination__svg" />
                </button>
              </li> : null
            }

            {paginationActive()}

            {searchActivePage < searchResultPages - 2 ?
              <li className="pagination__item">
                <button className="pagination__btn" onClick={() => { onPageChanged(searchQuery, searchActivePage + 1) }}>
                  <Icons name="arrow-next" className="pagination__svg" />
                </button>
              </li> : null
            }

            <li className="pagination__item">
              <button className={"pagination__btn " + (searchActivePage === searchResultPages ? "pagination__btn--active" : null)} onClick={() => { onPageChanged(searchQuery, searchResultPages) }}>
                {searchResultPages}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pagination;