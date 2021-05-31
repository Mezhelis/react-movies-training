import Icons from "../../Icons/Icons";

const PersonsItem = (props) => {
  const {
    profileImg,
    name,
    known,
  } = props;

  return (
    <div className="persons-item">
      <div className="persons-item__img">
        {profileImg ?
          <img src={profileImg} alt={name} /> :
          <Icons name="no-image" className="persons-item__svg" />
        }

      </div>
      <div className="persons-item__info">
        <h6 className="persons-item__name">
          {name}
        </h6>
        <span className="persons-item__known">
          {known}
        </span>
      </div>
    </div>
  )
}

export default PersonsItem;