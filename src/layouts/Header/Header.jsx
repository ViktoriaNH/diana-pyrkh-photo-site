import { NavLink } from "react-router-dom";
import menuItems from "../../data/menuItems";
import "./Header.scss";
import { useState } from "react";
import BurgerButton from "../../components/BurgerButton/BurgerButton";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner container">
        <div className="header__text">
          <span>DIANA</span>
          <span>PYPKH</span>
          <span>memories in photos</span>
        </div>

        <nav className={`header__menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="header__menu-list">
            {menuItems.map((item) => (
              <li className="header__menu-item" key={item.id}>
                <NavLink
                  to={item.id === "home" ? "/" : `/${item.id}`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <BurgerButton
          isActive={isMenuOpen}
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
      </div>
    </header>
  );
};

export default Header;
