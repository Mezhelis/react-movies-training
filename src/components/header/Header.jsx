import SearchContainer from "../searchPage/search/SearchContainer";
import Logo from "./logo/Logo";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <Logo />
          <SearchContainer />
        </div>
      </div>
    </header>
  )
}

export default Header;