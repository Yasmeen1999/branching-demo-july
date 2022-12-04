import React, { useState } from "react";
// import { Link } from "react-router-dom";

const data = {
  products: [
    { id: 123, name: "cloths" },
    { id: 231, name: "watches" },
    { id: 321, name: "electronic" },
  ],
};

const Product = () => {
 const [element, setElements] = useState(data.products);
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {element.map((a) => (
          <li key={a.id}>
            <p>{a.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
