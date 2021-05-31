import Icons from "../../Icons/Icons";

const SocialItem = (props) => {
  const {
    link,
    nameSocial
  } = props;

  return (
    <li className="social-item">
      <a href={link} className="social-item__link" target="_blank
">
        <Icons name={nameSocial} className="social-item__svg" />
      </a>
    </li>
  )
}

export default SocialItem;