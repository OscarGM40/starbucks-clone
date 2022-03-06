import "./findAStore.css";
import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export const FindAStore = () => {
  return (
    <Link to="" className="findAStore">
      <LocationOnIcon />
      <h5>Find a store</h5>
    </Link>
  );
};
