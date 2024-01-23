import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT_MENU } from "../utils/constant";

const RestaurantMenu = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  const { restaurantId } = useParams();

  useEffect(() => {
    fetchResaturantInfo();
  }, []);

  console.log(restaurantId);

  const fetchResaturantInfo = async () => {
    const restaurantInfo = await fetch(
      RESTAURANT_MENU +
        restaurantId
    );
    const restaurantInfoJson = await restaurantInfo.json();
    console.log(restaurantInfoJson);
    setRestaurantDetails(restaurantInfoJson);
  };
  if (restaurantDetails === null) return <Shimmer />;

  const { name, id, cuisines, avgRating, costForTwoMessage } =
    restaurantDetails?.data?.cards[0]?.card?.card?.info;
  console.log(restaurantDetails?.data?.cards[0]?.card?.card?.info);
    const {itemCards}=restaurantDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)
  return (
    <div>
      <h1>{name}</h1>
      <h4>
        {cuisines.join(",")} - {costForTwoMessage}
      </h4>
      <h4>{avgRating}</h4>
      <h2>Menu</h2>
      {itemCards.map(item=><li key={item.card.info.id} className="item">{item.card.info.name}    -    Rs.{item.card.info.price/100||item.card.info.defaultPrice/100}</li>)}
    </div>
  );
};
export default RestaurantMenu;
