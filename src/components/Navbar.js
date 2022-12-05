import React from "react";

import {Link} from "react-router-dom";

let Navbar=()=>{
    return(
        <div className="nav">
            <ul>
                <li><Link to='/' className="items">Home</Link></li>
                <li><Link to='/products' className="items">Products</Link></li>
                <li><Link to='/admin' className="items">Admin</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;