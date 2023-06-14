import './index.css'

const VisitedItem = props => {
  const {visitDetails, removeCountry} = props
  const {id, name, imageUrl} = visitDetails

  const removeBtn = () => {
    removeCountry(id)
  }

  return (
    <li className="list-item2">
      <img src={imageUrl} alt="thumbnail" className="listImg" />
      <div className="list-heading-container">
        <p className="list-para-2">{name}</p>
        <button type="button" className="removeBtn" onClick={removeBtn}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedItem
