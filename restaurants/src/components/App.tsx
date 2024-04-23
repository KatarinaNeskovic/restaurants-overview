import { useEffect, useState } from "react";
import { fetchData } from "../functions/fetchData";
import { IRestaurant } from "../types/types";
import "./App.css";
import { Card } from "./Card";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);


  useEffect(() => {
    fetchData().then((restaurantsInEffect) => {
      setRestaurants(restaurantsInEffect);
    });
  }, []);

  return (
    <div>
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => (
          <Card key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
