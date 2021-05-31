import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handleOnChange, handleOnSubmit } from "./searchReducer";
import Search from "./Search";

let mapStateToProps = (state) => {
  return {
    search: state.searchComponent.search,
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleOnChange,
    handleOnSubmit
  }, dispatch)
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;