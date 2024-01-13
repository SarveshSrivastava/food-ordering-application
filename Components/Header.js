
import "../App.css"
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="HeaderComponent">
      <>
      <img src={logo} alt="food-ordering-application-logo"/>
      </>
      <>
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
      </>
    </div>
  );
};
export default Header;