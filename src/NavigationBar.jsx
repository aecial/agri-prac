import "./NavigationBar.css";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <>
      <nav>
        <Link to={"/home"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/"}>Sign Out</Link>
        <Link to={"/Pricing-Guidelines"}>Pricing Guidelines</Link>
      </nav>
    </>
  );
};

export default NavigationBar;
