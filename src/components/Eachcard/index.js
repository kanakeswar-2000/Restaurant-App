import './index.css'

const Eachcard = props => {
  const {details} = props
  const {
    dishName,
    dishPrice,
    dishDescription,
    dishImage,
    dishCalories,
    dishAvailability,
    dishCurrency,
    addonCat,
  } = details
  return (
    <div className="each-card-container">
      <div className="info-container">
        <h1>{dishName}</h1>
        <p>
          {dishCurrency} {dishPrice}
        </p>
        <p>{dishDescription}</p>
        {dishAvailability ? (
          <div className="button-container">
            <button className="button">-</button>
            <p> 0 </p>
            <button className="button">+</button>
          </div>
        ) : (
          <p> Not available</p>
        )}
        {addonCat.length > 0 && <p>Customizations available</p>}
      </div>
      <div>
        <p>{dishCalories} calories</p>
      </div>
      <div>
        <img src={dishImage} className="image" />
      </div>
    </div>
  )
}
export default Eachcard
