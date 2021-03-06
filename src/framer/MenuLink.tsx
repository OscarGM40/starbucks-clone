import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface Props {
  link: string;
  onClick?: () => void;
  path?: string;
  width?: string;
  goBackIcon?: boolean;
  icon?: boolean;
}

export const MenuLink = ({
  link,
  path,
  icon,
  goBackIcon,
  onClick,
  width,
}: Props) => {
  return (
    <>
      <Link to={path || ""}>
        <motion.li
          style={{ width }}
          onClick={onClick}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* si es hacia atras va antes,sino despues de la label */}
          {goBackIcon && <ChevronLeftRoundedIcon fontSize="large" />}
          {link}
          {icon && <ChevronRightRoundedIcon fontSize="large" />}
        </motion.li>
      </Link>
    </>
  );
};
