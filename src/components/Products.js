import React, { useState } from "react";

let data={
    products:[
        {id:123,name:"soap"},
        {id:456,name:"watch"},
        {id:789,name:"pen"}
    ],
};

let Product=()=>{
    const [item, setItem]= useState(data.products)
    return(
        <div className="prod">
            <h2>Products</h2>
            <ul>
                {item.map((a)=>(
                    <li>  {a.name}  </li>
                ))}
            </ul>

        </div>
    )
}
export default Product;