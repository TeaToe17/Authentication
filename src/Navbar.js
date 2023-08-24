import { Link } from "react-router-dom";

import Home from "./Home";
import Nopage from "./Nopage";
import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";


const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/site/home">Home</Link>
        </li>
        <li>
          <Link to="/site/about">About</Link>
        </li>
        <li>
          <Link to="/site/contact">Contact</Link>
        </li>
        <li>
          <Link to="/site/courses">Courses</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
