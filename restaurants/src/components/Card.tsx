import { IRestaurant } from "../types/types";

interface Props {
  restaurant: IRestaurant;
}
export const Card: React.FC<Props> = ({ restaurant }) => {
  const { name, rating, cuisines, address } = restaurant;
  const { city, firstLine, postalCode, location } = address;
  const { coordinates, type } = location;

  return (
    <div className="card">
      <label className="name"> Name: {name} </label >
      <div className="rating"> Rating: {rating.starRating} </div>
      <div className="cuisines">
        {" "}
        Cuisines: {cuisines.map((c) => c.name).join(", ")}{" "}
      </div>
      <div className="address">
        {" "}
        Address:
        <ul>
          <li> Street: {firstLine} </li>
          <li> City: {city} </li>
          <li> Postal Code: {postalCode} </li>
          <li>
            {" "}
            Location:
            <ul> {type}</ul>
            <ul> {[coordinates].join(", ")}</ul>
          </li>
        </ul>{" "}
      </div>
    </div>
  );
};
