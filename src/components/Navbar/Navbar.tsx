import { Link } from "react-router";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>MATUMBA 1.0</h1>
      <div className="links">
        <Link to="/">Notes</Link>
        <Link to="/calculator">Calculator</Link>
      </div>
    </nav>
  );
}

export default Navbar;
