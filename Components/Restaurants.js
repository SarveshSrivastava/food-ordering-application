import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import {restaurantsList} from "../mock/restaurants";
const Restaurants = () => {

    const [restaurants,setRestaurants] = useState(restaurantsList);

    const handleClick=()=>{
        filteredRestaurants=restaurants.filter(x=>x.info.avgRating>4.4);
        console.log(filteredRestaurants)
        setRestaurants(filteredRestaurants);
    }
  return (
    <>
      <div>
        <button id="filterbutton" onClick={handleClick}>Filter top rated restaurants</button>
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
