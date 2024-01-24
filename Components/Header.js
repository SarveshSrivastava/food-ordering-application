import { useState } from "react";
import "../App.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btn, setBtn] = useState("Login");
  const handleClick = () => {
    btn === "Login" ? setBtn("Logout") : setBtn("Login");
  };

  const status = useOnlineStatus();
  return (
    <div className="HeaderComponent">
      <>
        <img src={logo} alt="food-ordering-application-logo" />
      </>
      <>
        <ul className="nav-items">
          <li className="navItems">{status ? "🟢" : "🔴"}</li>
          <li className="navItems">
            <Link to="/" className="navLinks">
              Home
            </Link>
          </li>
          <li className="navItems">
            <Link to="/about-us" className="navLinks">
              About Us
            </Link>
          </li>
          <li className="navItems">
            <Link to="/contact-us" className="navLinks">
              Contact Us
            </Link>
          </li>
          <li className="navItems">
            <Link to="/class-component/lifecycle" className="navLinks">
              ClassComponent
            </Link>
          </li>
          <li className="navItems">
            <Link to="/functional-component/divedeep" className="navLinks">
              FunctionalComponent
            </Link>
          </li>
          <li className="navItems">Cart</li>
          <button className="btn" onClick={handleClick}>
            {btn}
          </button>
        </ul>
      </>
    </div>
  );
};
export default Header;
