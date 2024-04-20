export interface IData {
  metaData: unknown;
  restaurants: IRestaurant[];
  deliveryFees: unknown;
  promotedPlacement: unknown;
  filters: unknown;
  layout: unknown;
  enrichedLists: unknown;
}

export interface IRestaurant
 {
  name: string;
  cuisines: ICuisine[];
  rating: IRating;
  address: IAddress;
}

export interface IAddress {
  city: string;
  firstLine: string;
  postalCode: string;
  location: unknown; //setting as unknown to avoid extra type definition for what I won't need.
}

export interface IRating {
    count:number;
    starRating: number;
    userRating: number;
}

export interface ICuisine {
    name:string;
    uniqueName:string;
}