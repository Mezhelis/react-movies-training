import ReactPlayer from "react-player";
import Icons from "../Icons/Icons";

const ModalVideo = (props) => {
  const {
    title,
    youtubeUrl
  } = props;

  const {
    isOpenModal,
  } = props;

  return (
    <div className="modal-video">
      <div className="modal-video__wrap">
        <div className="modal-video__header">
          <h6 className="modal-video__title title">
            {title}
          </h6>
          <div className="modal-video__controls">
            <button
              className="modal-video__btn-close"
              onClick={() => isOpenModal(false)}>
              <Icons name="close" className="modal-video__svg" />
            </button>
          </div>
        </div>
        <div className="modal-video__body">
          <ReactPlayer
            className="modal-video__player"
            url={youtubeUrl}
            width="100%"
          >
          </ReactPlayer>
        </div>
      </div>
    </div>
  )
}

export default ModalVideo;