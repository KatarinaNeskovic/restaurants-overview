import { useEffect, useState } from "react";
import { fetchData } from "../functions/fetchData";
import { IRestaurant } from "../types/types";
import "./App.css";
import { Card } from "./Card";
import Logo_w from '../assets/Logo_w.png'

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);


  useEffect(() => {
    fetchData().then((restaurantsInEffect) => {
      setRestaurants(restaurantsInEffect);
    });
  }, []);

  return (
    <div>
     
        <img src={Logo_w} className="logo"/> 
      <h1> RESTAURANTS OVERVIEW </h1>
      <div className="card-container">
        {restaurants.map((restaurant, index) => (
          <Card key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
