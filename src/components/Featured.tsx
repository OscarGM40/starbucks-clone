import { Link } from "react-router-dom";
import './featured.css'

type Props = {
  title: string;
  info: string;
  link: string;
  path: string;
  image: string;
  background: string;
  color: string;
  className: string;
  order?: string;
};
export const Featured = ({
  title,
  info,
  link,
  path,
  image,
  order,
  background,
  color,
  className,
}: Props) => {
  return (
    <div className="featured" style={{ background }}>
      <div className="featured__left" style={{ order, color }}>
        <h1>{title}</h1>
        <h4>{info}</h4>
        <Link to={path} className={className}>
          {link}
        </Link>
      </div>
      <div className="featured__right">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};
