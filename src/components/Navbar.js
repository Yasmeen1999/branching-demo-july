import React from "react";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
          fontSize: "30px",
          color: "red",
          margin:"20px",
        }}
      >
        <li>
            <Link to="/">Home</Link>
        </li>
        <li> <Link to="/products">Products</Link></li>
        <li>
           <Link to="/admin">Admin</Link>
        </li>
      </ul>
      
    </div>
  );
};
export default Navbar;
