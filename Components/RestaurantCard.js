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
        <h6>{name}</h6>
        <p>{price}</p>
        <p>{avgRating}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
