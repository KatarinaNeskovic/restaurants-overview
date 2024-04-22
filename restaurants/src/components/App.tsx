import { useState } from "react";
import { fetchData } from "../functions/fetchData";
import { IRestaurant } from "../types/types";
import "./App.css";
import { Card } from "./Card";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  const handleClick = async () => {
    try {
      const restaurantsArray = await fetchData();
      setRestaurants(restaurantsArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => (
          <Card key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
