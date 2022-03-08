import { motion } from "framer-motion";
import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import { FindAStore } from "../components/FindAStore";
import LogoutButton from "../components/LogoutButton";
import SignInButton from "../components/SignInButton";
import SignUpButton from "../components/SignUpButton";
import { MenuLink } from "./MenuLink";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
/* son las mismas variants de MenuItem */
const variants2 = {
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
  toggle: () => void;
}
export const Navigation = ({ toggle }: Props) => {
  const [showMenuCategories, setShowMenuCategories] = useState(false);
  const user = useAppSelector(state => state.user.user);


  return (
    <>
      {showMenuCategories ? (
        <motion.ul variants={variants}>
          <MenuLink
            link="Menu"
            goBackIcon
            onClick={() => setShowMenuCategories(false)}
            width="60%"
          />
          <MenuLink
            link="All products"
            path="/menu"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
          <MenuLink
            link="Featured"
            path="/menu/featured"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
          <MenuLink
            link="Previous Orders"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
          <MenuLink
            link="Favorite Products"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
        </motion.ul>
      ) : (
        <motion.ul variants={variants}>
          <MenuLink
            link="Menu"
            icon
            onClick={() => setShowMenuCategories(true)}
          />
          <MenuLink link="Rewards" />
          <MenuLink link="Gift Cards" />
          {/* para acceder a variants tiene que ser un motion.<xx> */}
          <motion.hr variants={variants2} />
          <motion.div className="navigation__buttons" variants={variants2}>
            {/* TODO impl User with redux */}
             {!user ? (
              <>
                <SignInButton />
                <SignUpButton />
              </>
            ) : (
              <LogoutButton />
            )} 
          </motion.div>
          <motion.div variants={variants2}>
            <FindAStore />
          </motion.div>
        </motion.ul>
      )}
    </>
  );
};
