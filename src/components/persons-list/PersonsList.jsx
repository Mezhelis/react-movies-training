import PersonsItem from "./persons-item/PersonsItem";

const PersonsList = (props) => {
  const {
    title,
    persons,
    sizePesrons
  } = props;

  const trendingPersons = persons.slice(0, sizePesrons).map((item) => {
    return (
      <PersonsItem key={item.id} profileImg={item.profileImg} name={item.name} known={item.known} />
    )
  })

  return (
    <section className="persons-list">
      <div className="container">
        <div className="persons-list__header">
          <h3 className="persons-list__title title">
            {title}:
          </h3>
        </div>
        <div className="persons-list__body">
          {trendingPersons}
        </div>
      </div>
    </section>
  )
}

export default PersonsList;