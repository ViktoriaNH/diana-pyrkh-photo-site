import { Link, NavLink } from "react-router-dom";
import menuItems from "../../data/menuItems";
import "./Header.scss";
import BurgerButton from "../../components/BurgerButton/BurgerButton";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <div className="header__text">
          <span>DIANA</span>
          <span>PYPKH</span>
          <span>memories in photos</span>
        </div>
        <BurgerButton className="header__burger-button" />

        <nav className="header__menu">
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
      </div>
    </header>
  );
};

export default Header;

// import './Header.scss'
// import Logo from '@/components/Logo'
// import classNames from 'classnames'
// import Button from '@/components/Button'
// import BurgerButton from '@/components/BurgerButton'

// const Header = (props) => {
//   const {
//     url,
//     isFixed,
//   } = props

//   const menuItems = [
//     {
//       label: 'Home',
//       href: '/',
//     },
//     {
//       label: 'Movies & Shows',
//       href: '/movies',
//     },
//     {
//       label: 'Support',
//       href: '/support',
//     },
//     {
//       label: 'Subscriptions',
//       href: '/subscriptions',
//     },
//   ]

//   return (
//     <header
//       className={classNames('header', {
//         'is-fixed': isFixed,
//       })}
//       data-js-overlay-menu=""
//     >
//       <div className="header__inner container">
//         <Logo
//           className="header__logo"
//           loading="eager"
//         />
//         <dialog
//           className="header__overlay-menu-dialog"
//           data-js-overlay-menu-dialog=""
//         >
//           <nav className="header__menu">
//             <ul className="header__menu-list">
//               {menuItems.map(({ label, href }, index) => (
//                 <li className="header__menu-item" key={index}>
//                   <a
//                     className={classNames('header__menu-link', {
//                       'is-active': href === url
//                     })}
//                     href={href}
//                   >
//                     {label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//           <div className="header__actions">
//             <Button
//               className="header__button"
//               label="Search"
//               isLabelHidden
//               mode="transparent"
//               iconName="search"
//             />
//             <Button
//               className="header__button"
//               label="Notifications"
//               isLabelHidden
//               mode="transparent"
//               iconName="notification"
//             />
//           </div>
//         </dialog>
//         <BurgerButton
//           className="header__burger-button visible-tablet"
//           extraAttrs={{
//             'data-js-overlay-menu-burger-button': '',
//           }}
//         />
//       </div>
//     </header>
//   )
// }

// export default Header
