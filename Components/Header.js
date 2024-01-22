import { useState } from "react";
import "../App.css";
import logo from "../assets/logo.png";
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
          <li>Home</li>
          <li>About Us</li>
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
