import { getRestaurants } from "../functions/getRestaurants";
import { IData } from "../types/types";

describe("Test getRestaurants function ", () => {
  test("getting an array of restaurants with id,name,address and rating", () => {
    const data: IData = {
      metaData: 12345,
      restaurants: [
        {
          address: {
            city: "Belfast",
            firstLine: "Norwich 25",
            postalCode: "emc2",
            location: {
              coordinates: [-3.5, 10],
              type: "Point",
            },
          },
          cuisines: [{ name: "thai" }, { name: "pizza" }, { name: "burger" }],
          name: "Johnnys",
          rating: { starRating: 3.8 },
        },
        {
          address: {
            city: "London",
            firstLine: "Lane 3",
            postalCode: "2245",
            location: {
              coordinates: [-3.5, 10],
              type: "Point",
            },
          },
          cuisines: [{ name: "vegan" }, { name: "burger" }, { name: "salad" }],
          name: "Johnnys",
          rating: { starRating: 4.2 },
        },
        {
          address: {
            city: "Brighton",
            firstLine: "Bedford 345",
            postalCode: "2345",
            location: {
              coordinates: [-3.5, 10],
              type: "Point",
            },
          },
          cuisines: [
            { name: "japanese" },
            { name: "sushi" },
            { name: "fusion" },
          ],
          name: "Johnnys",
          rating: { starRating: 4.8 },
        },
      ],
      deliveryFees: 12345,
      enrichedLists: "n/a",
      filters: "n/a",
      layout: "n/a",
      promotedPlacement: 3,
    };
    const result = getRestaurants(data);
    expect(result).toEqual([
      {
        address: {
          city: "Belfast",
          firstLine: "Norwich 25",
          postalCode: "emc2",
          location: {
            coordinates: [-3.5, 10],
            type: "Point",
          },
        },
        cuisines: [{ name: "thai" }, { name: "pizza" }, { name: "burger" }],
        name: "Johnnys",
        rating: { starRating: 3.8 },
      },
      {
        address: {
          city: "London",
          firstLine: "Lane 3",
          postalCode: "2245",
          location: {
            coordinates: [-3.5, 10],
            type: "Point",
          },
        },
        cuisines: [{ name: "vegan" }, { name: "burger" }, { name: "salad" }],
        name: "Johnnys",
        rating: { starRating: 4.2 },
      },
      {
        address: {
          city: "Brighton",
          firstLine: "Bedford 345",
          postalCode: "2345",
          location: {
            coordinates: [-3.5, 10],
            type: "Point",
          },
        },
        cuisines: [{ name: "japanese" }, { name: "sushi" }, { name: "fusion" }],
        name: "Johnnys",
        rating: { starRating: 4.8 },
      },
    ]);
  });
});
