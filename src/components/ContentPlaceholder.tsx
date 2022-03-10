import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import './contentPlaceholder.css';

export const Word = ({ link }: { link: string }) => {
  return (
    <Link to="/" className="word">
      {link}
    </Link>
  );
};

export const Paragraph = ({ link1, link2, link3, link4, link5, link6 }: Props) => {
  return (
    <div className="paragraph">
      <Word link={link1!} />
      <Word link={link2!} />
      <Word link={link3!} />
      <Word link={link4!} />
      <Word link={link5!} />
      <Word link={link6!} />
    </div>
  );
};

type Props = {
  link1?: string;
  link2?: string;
  link3?: string;
  link4?: string;
  link5?: string;
  link6?: string;
};

export const ContentPlaceholder = (props:Props) => {
  return (
    <motion.div
      variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
      className="contentPlaceholder"
    >
      <Paragraph  {...props} />
    </motion.div>
  );
};
