import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import SearchPage from "./SearchPage"
import { onPageChanged } from "./searchPageReducer"

const mapStateToProps = (state) => {
  return {
    searchQuery: state.searchPage.searchQuery,
    searchResult: state.searchPage.searchResult,
    searchResultPages: state.searchPage.searchResultPages,
    searchActivePage: state.searchPage.searchActivePage,
    loading: state.searchPage.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onPageChanged,
  }, dispatch)
}

const SearchPageContainer = connect(mapStateToProps, mapDispatchToProps)(SearchPage);

export default SearchPageContainer;