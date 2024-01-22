import { useState } from "react";
import "../App.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [btn, setBtn] = useState("Login");
  const handleClick = () => {
    btn === "Login" ? setBtn("Logout") : setBtn("Login");
  };

  return (
    <div className="HeaderComponent">
      <>
        <img src={logo} alt="food-ordering-application-logo" />
      </>
      <>
        <ul className="nav-items">
          <li><Link to="/" className="navLinks">Home</Link></li>
          <li><Link to="/about-us" className="navLinks">About Us</Link></li>
          <li><Link to="/contact-us" className="navLinks">Contact Us</Link></li>
          <li>Cart</li>
          <button className="btn" onClick={handleClick}>
            {btn}
          </button>
        </ul>
      </>
    </div>
  );
};
export default Header;
