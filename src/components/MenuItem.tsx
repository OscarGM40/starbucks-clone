import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "./menuItem.css";

type Props = {
  type: string;
  image: string;
};
export const MenuItem = ({ type, image }: Props) => {
  return (
    <Fade>
      <Link to="" className="menuItem">
        <img src={image} alt={type} className="menuItem__image" />
        <h4 className="menuItem__type">{type}</h4>
      </Link>
    </Fade>
  );
};
