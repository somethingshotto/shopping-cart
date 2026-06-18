import { NavLink } from "react-router-dom";
import logo from "../assets/TM-logo.png";
import { useCart } from "../components/context";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <img className="image" src={logo} alt="logo" />
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Cart {cartCount > 0 && <span className="badge">({cartCount})</span>}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;