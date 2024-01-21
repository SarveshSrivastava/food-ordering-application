import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../mock/restaurants";
import Shimmer from "./Shimmer";
const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  const handleClick = () => {
    filteredRestaurants = restaurants.filter((x) => x.info.avgRating > 4.4);
    console.log(filteredRestaurants);
    setRestaurants(filteredRestaurants);
  };

  useEffect(() => {
    fetchSwiggyData();
  }, []);

  const fetchSwiggyData=async ()=>{
    const swiggyData=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.34991224864122&lng=78.41912437230349&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const swiggyJson=await swiggyData.json();
    console.log(swiggyJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurants(swiggyJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  if(restaurants.length===0)
    return <Shimmer/>
  return (
    <>
      <div>
        <button id="filterbutton" onClick={handleClick}>
          Filter top rated restaurants
        </button>
      </div>
      <div className="RestaurantsComponents">
        {restaurants.map((x) => (
          <RestaurantCard
            key={x.info.id}
            name={x.info.name}
            price={x.info.costForTwo}
            image={x.info.cloudinaryImageId}
            avgRating={x.info.avgRating}
          />
        ))}
      </div>
    </>
  );
};
export default Restaurants;
