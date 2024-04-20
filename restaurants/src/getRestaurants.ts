import type { IData, IRestaurant } from "./types";

export function getRestaurants(data: IData): IRestaurant[] {
  const result = data.restaurants.map((el) => {
    const restaurant: IRestaurant = {
      name: el.name,
      address: {
        firstLine: el.address.firstLine,
        city: el.address.city,
        postalCode: el.address.postalCode,
      },
      cuisines: el.cuisines.map((e) => 
        ({name:e.name})),
      rating: {
        starRating: el.rating.starRating,
      },
    };
    return restaurant;
  });
  return result;
}
