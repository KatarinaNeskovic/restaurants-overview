import { IRestaurant } from "../types/types";
import "./Card.css";

interface Props {
  restaurant: IRestaurant;
}
export const Card: React.FC<Props> = ({ restaurant }) => {
  const { name, rating, cuisines, address } = restaurant;
  const { city, firstLine, postalCode, location } = address;
  const { coordinates, type } = location;

  return (
    <div className="card">
      <b> Name: </b> {name} <br /> <br />
      <b> Rating: </b> {rating.starRating} <br /> <br />
      <b> Cuisines: </b> {cuisines.map((c) => c.name).join(", ")} <br /> <br />
      <b> Address: </b>
      <ul>
        <li> Street: {firstLine} </li>
        <li> Postal Code: {postalCode} </li>
        <li> City: {city} </li>
        <li>
          {" "}
          Location:
          <ul>
            <li> Type: {type} </li>
            <li>
              {" "}
              Coordinates: <br /> {coordinates[0]}, {coordinates[1]}
            </li>
          </ul>{" "}
        </li>
      </ul>
    </div>
  );
};
