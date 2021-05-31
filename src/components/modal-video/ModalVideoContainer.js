import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ModalVideo from "./ModalVideo";
import { isOpenModal } from "./modalVideoReducer";

let mapStateToProps = (state) => {
  return {
    title: state.modalVideoComponent.title,
    youtubeUrl: state.modalVideoComponent.youtubeUrl,
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    isOpenModal,
  }, dispatch)
}

const ModalVideoContainer = connect(mapStateToProps, mapDispatchToProps)(ModalVideo);

export default ModalVideoContainer;