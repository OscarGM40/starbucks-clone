import { Link } from "react-router-dom";
import "./info.css";

type Props = {
  title: string;
  image: string;
  info: string;
  link: string;
  color: string;
  background: string;
  className: string;
  path?: string;
};
export const Info = ({
  title,
  image,
  info,
  link,
  color,
  background,
  path,
  className,
}: Props) => {
  return (
    <div
      className="info"
      style={{
        color,
        background,
      }}
    >
      <img src={image} alt={title} className="info__image" />
      <div className="info__text">
        <h4>{title}</h4>
        <h6>{info}</h6>
        <Link to={path || "/"} style={{ color }} className={className}>
          {link}
        </Link>
      </div>
    </div>

);
};
