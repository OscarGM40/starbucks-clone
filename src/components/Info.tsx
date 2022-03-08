import './info.css';

type Props = {
  title: string;
  image: string;
  info: string;
  link: string;
  color: string;
  background: string;
  className: string;
};
export const Info = ({
  title,
  image,
  info,
  link,
  color,
  background,
  className,
}: Props) => {
  return <div>Info</div>;
};
