import ContactList from "../contact-list/ContactList";
import Icons from "../Icons/Icons";
import SocialList from "../social-list/SocialList"

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__info">
            <h3 className="footer__title title">О нас</h3>
            <p className="footer__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iusto aliquam accusamus unde quam perferendis provident vel assumenda modi ut. Maxime, omnis impedit. Architecto laboriosam quidem quo voluptatem tempora laudantium nobis non commodi deserunt temporibus quas aperiam, sequi libero dolore, quisquam nam maxime ab officiis impedit repellendus incidunt. Nemo, quisquam.
            </p>
            <p className="footer__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iusto aliquam accusamus unde quam perferendis provident vel assumenda modi ut. Maxime, omnis impedit. Architecto laboriosam quidem quo voluptatem tempora laudantium nobis non commodi deserunt temporibus quas aperiam, sequi libero dolore, quisquam nam maxime ab officiis impedit repellendus incidunt. Nemo, quisquam.
            </p>
            <SocialList />
          </div>

          <div className="footer__contact-list">
            <h3 className="footer__title title">Контакты</h3>
            <ContactList />
            <a href="https://www.themoviedb.org/">
              <Icons name="tmdb-logo" className="footer__tmdb" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;