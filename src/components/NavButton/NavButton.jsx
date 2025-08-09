import { Link } from "react-router-dom";
import "./NavButton.scss";

const NavButton = ({ to, children, className = "" }) => {
  return (
    <Link to={to} className={className} type='button'>
      {children}
    </Link>
  );
}

export default NavButton;
