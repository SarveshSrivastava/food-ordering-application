import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../mock/restaurants";
import Shimmer from "./Shimmer";
const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText,setSearchText] = useState("");

  const handleChange=(e)=>{
    setSearchText(e.target.value)
  }

  const handleSearchClick=()=>{
    const fR = restaurants.filter(x=>x.info.name.toLowerCase().includes(searchText.toLowerCase()))
    setFilteredRestaurants(fR);
  }

  const handleClick = () => {
    const fR = restaurants.filter((x) => x.info.avgRating > 4.1);
    console.log(fR);
    setFilteredRestaurants(fR);
  };

  useEffect(() => {
    fetchSwiggyData();
  }, []);

  const fetchSwiggyData = async () => {
    const swiggyData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.34991224864122&lng=78.41912437230349&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const swiggyJson = await swiggyData.json();
    console.log(
      swiggyJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurants(
      swiggyJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(swiggyJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants);
  };

  // if(restaurants.length===0)
  //   return <Shimmer/>

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <input type="text" value={searchText} onChange={handleChange}/>
        <button className="searchButton" onClick={handleSearchClick}>SEARCH</button>
        <button id="filterbutton" onClick={handleClick}>
          Filter top rated restaurants
        </button>
      </div>
      <div className="RestaurantsComponents">
        {filteredRestaurants.map((x) => (
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
