import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT_MENU } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  console.log("RestaurantMenu");

  const { restaurantId } = useParams();
  const restaurantDetails = useRestaurantMenu(restaurantId);

  if (restaurantDetails === null) return <Shimmer />;
  const { name, id, cuisines, avgRating, costForTwoMessage } =
    restaurantDetails?.data?.cards[0]?.card?.card?.info;
  //   console.log(restaurantDetails?.data?.cards[0]?.card?.card?.info);
  const { itemCards } =
    restaurantDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards[1]?.card?.card;
  //   console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      <h4>{avgRating}</h4>
      <h1>Menu</h1>
      {itemCards.map((item) => (
        <li key={item.card.info.id} className="item">
          <h2>
            {item.card.info.name} - Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </h2>
        </li>
      ))}
    </div>
  );
};
export default RestaurantMenu;
