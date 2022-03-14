import "./menuList.css";
import menuList from "./../menuList.json";
import { Link } from "react-router-dom";

export const MenuList = () => {
  return (
    <div className="menuList">
      <div className="menuList__container">
        <h4>Drinks</h4>
        <div className="menuList__items">
          {menuList.map((menuListCategory, index) =>
            menuListCategory.drinks.map((menuListItem) => (
              <Link to="">{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>

      <div className="menuList__container">
        <h4>Food</h4>
        <div className="menuList__items">
          {menuList.map((menuListCategory, index) =>
            menuListCategory.food.map((menuListItem) => (
              <Link to="">{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>

      <div className="menuList__container">
        <h4>At Home Coffee</h4>
        <div className="menuList__items">
          {menuList.map((menuListCategory, index) =>
            menuListCategory.atHomeCoffee.map((menuListItem) => (
              <Link to="">{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>

      <div className="menuList__container">
        <h4>Merchandise</h4>
        <div className="menuList__items">
          {menuList.map((menuListCategory, index) =>
            menuListCategory.merchandise.map((menuListItem) => (
              <Link to="">{menuListItem.type}</Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
