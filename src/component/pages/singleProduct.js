import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data";
import "../../App.scss";

export const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((items) => items.id == productId);
  const { name, img_url, category, description, price } = product;
  return (
    <div className="singlePage">
      <img src={img_url} alt="" />
      <h4>{name}</h4>
      <p>{description}</p>
      <span>{category}</span>
      <h4>{price}</h4>
      <Link to="/products">Back to products</Link>
    </div>
  );
}; 
