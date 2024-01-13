import RestaurantCard from "./RestaurantCard";
import restaurants from "../mock/restaurants.json"
const Restaurants=()=>{
return(<div className="RestaurantsComponents">
    {
        restaurants.map(x=><RestaurantCard name={x.info.name} price={x.info.costForTwo} image={x.info.cloudinaryImageId}/>)
    }
</div>)
}
export default Restaurants;