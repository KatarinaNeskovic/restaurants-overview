import type { IData, IRestaurant } from "../types/types";

export function getRestaurants(data: IData): IRestaurant[] {
  const result = data.restaurants.map((el) => {
    const restaurant: IRestaurant = {
      name: el.name,
      address: {
        firstLine: el.address.firstLine,
        city: el.address.city,
        postalCode: el.address.postalCode,
        location: {
          coordinates: el.address.location.coordinates,
          type: el.address.location.type,
        },
      },
      cuisines: el.cuisines.map((e) => ({ name: e.name })),
      rating: {
        starRating: el.rating.starRating,
      },
    };
    return restaurant;
  });
  return result;
}
