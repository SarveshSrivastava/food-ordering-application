import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../mock/restaurants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANTS_LIST } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";


const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    const fR = restaurants.filter((x) =>
      x.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(fR);
  };

  const handleClick = () => {
    const fR = restaurants.filter((x) => x.info.avgRating > 4.1);
    console.log(fR);
    setFilteredRestaurants(fR);
  };

  useEffect(() => {
    fetchSwiggyData();
  }, []);

  const fetchSwiggyData = async () => {
    const swiggyData = await fetch(RESTAURANTS_LIST);
    const swiggyJson = await swiggyData.json();
    console.log(
      swiggyJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurants(
      swiggyJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      swiggyJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };


  const status = useOnlineStatus();
  if (status === false)
    return <h1>You are offline. Check your internet connection</h1>;

  // if(restaurants.length===0)
  //   return <Shimmer/>

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchBox">
        <input type="text" value={searchText} onChange={handleChange} />
        <button className="searchButton" onClick={handleSearchClick}>
          SEARCH
        </button>
        <button id="filterbutton" onClick={handleClick}>
          Filter top rated restaurants
        </button>
      </div>
      <div className="RestaurantsComponents">
        {filteredRestaurants.map((x) => (
          <Link
            to={"/restaurant/" + x.info.id}
            key={x.info.id}
            className="restaurants"
          >
            <RestaurantCard
              name={x.info.name}
              price={x.info.costForTwo}
              image={x.info.cloudinaryImageId}
              avgRating={x.info.avgRating}
            />
          </Link>
        ))}
      </div>
    </>
  );
};
export default Restaurants;
