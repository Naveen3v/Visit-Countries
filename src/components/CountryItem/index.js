import './index.css'

const CountryItem = props => {
  const {countryDetails, addCountry} = props
  const {id, name, imageUrl, isVisited} = countryDetails

  const addList = () => {
    addCountry(id)
  }

  return (
    <li className="list-item">
      <p className="list-para1">{name}</p>
      {isVisited ? (
        <p className="visitPara">Visited</p>
      ) : (
        <button type="button" className="visit-btn" onClick={addList}>
          Visit
        </button>
      )}
    </li>
  )
}
export default CountryItem
