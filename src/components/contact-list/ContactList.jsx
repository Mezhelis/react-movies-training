const ContactList = (props) => {
  return (
    <ul className="contact-list">
      <li className="contact-list__item">
        <span>
          <strong>Адрес:</strong> Город, Улица, Дом
        </span>
      </li>
      <li className="contact-list__item">
        <span>
          <strong>Телефон:</strong> <a href="tel:+79999999999">+ 7 999 999 99-99</a>
        </span>
      </li>
      <li className="contact-list__item">
        <span>
          <strong>Email:</strong> <a href="mailto:info@infomail.com">info@infomail.com</a>
        </span>
      </li>
    </ul>
  )
}

export default ContactList;