import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "./constant";

const useRestaurantMenu = (restaurantId) => {
    console.log("useRestaurantMenu");
  
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    console.log("useRestaurantMenu useEffect");
    fetchResaturantInfo();
  }, []);

//   console.log(restaurantId);

  const fetchResaturantInfo = async () => {
    console.log("useRestaurantMenu fetchResaturantInfo");
    const restaurantInfo = await fetch(RESTAURANT_MENU + restaurantId);
    const restaurantInfoJson = await restaurantInfo.json();
    // console.log(restaurantInfoJson);
    setRestaurantDetails(restaurantInfoJson);
  };

  return restaurantDetails;
};

export default useRestaurantMenu;
