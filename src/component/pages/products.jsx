import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data";

function Products() {
  const Products = (e) => {
    return e.preventDefault();
  };
  return (
    <div className="product_container">
      {products.map((item) => {
        return (
          <div key={item.id} className="products">
            <img src={item.img_url} alt="photo" />
            <div className="textDiv">
              <p>Name: {item.name}</p>
              <p className="firstP">Category: {item.category}</p>
              <p className="secondP">Description: {item.description}</p>
              <p className="thirdP">Price: {item.price}USD</p>
              <footer>
                <Link className="link" to={`/products/${item.id}`}> {" "}Details </Link>  
                <button>Buy Now</button>
              </footer>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
