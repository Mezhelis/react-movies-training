import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={'/'}>
      <div className="logo">
        <span className="logo__title">
          MovieApp
        </span>
      </div>
    </Link>
  )
}

export default Logo;