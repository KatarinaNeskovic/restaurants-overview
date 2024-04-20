interface Data {
    metaData: unknown;
    restaurants: Restaurant[];
    deliveryFees: unknown;
    promotedPlacement: unknown;
    filters: unknown;
    layout: unknown;
    enrichedLists: unknown;
}

interface Restaurant {
  name: string;
  cuisines: string;
  rating: number;
  address: string;
}
