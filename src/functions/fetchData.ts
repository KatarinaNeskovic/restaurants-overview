import { getRestaurants } from "./getRestaurants";
import { IRestaurant } from "../types/types";

const apiUrl: string =
  "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/CF118AZ";

export async function fetchData(): Promise<IRestaurant[]> {
  const response = await fetch(apiUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error fetching data");
      }
      return res.json();
    })
    .catch((error) => {
      throw new Error("An error occured while fetching data" + error.message);
    });

  const restaurantData: IRestaurant[] = getRestaurants(response);

  return restaurantData.slice(0, 10).sort((r1, r2) => {
    if (r1.rating.starRating > r2.rating.starRating) return -1;
    else if (r1.rating.starRating < r2.rating.starRating) return 1;
    else return 0;
  });
}
//typecats
