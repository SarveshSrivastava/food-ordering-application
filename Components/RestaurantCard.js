import "../App.css";
const RestaurantCard = ({ name, price, image, avgRating }) => {
  return (
    <div className="restaurant-cards">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          image
        } // Replace with the URL or path to your image
        alt="Card Image"
      />
      <div className="card-content">
        <h2>{name}</h2>
        <h4>{price}</h4>
        <h4>{avgRating}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
