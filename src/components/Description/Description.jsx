/* eslint-disable eqeqeq */
import React, { useContext } from "react";
import { DataContext } from "../../App";
import Color from "../Color/Color";
import Sizes from "../Sizes/Sizes";
import "./Description.css";

const Description = () => {
  const productContext = useContext(DataContext);
  const { data, price, skus } = productContext.productState;
  const { sku } = productContext.initialSelect;

  const newPrice = skus.find(
    (item) => item.props[0] == sku.color && item.props[1] == sku.size
  );

  console.log(newPrice);

  let totalDiscount;

  if (!newPrice) {
    totalDiscount = Math.floor(
      ((price.old - price.discounted) / price.old) * 100
    );
  } else {
    totalDiscount = Math.floor(
      ((newPrice.price.old - newPrice.price.discounted) / newPrice.price.old) *
        100
    );
  }

  return (
    <div className="description-container">
      <div className="product-title">
        <h1>{data.title}</h1>
      </div>
      <hr />
      <div className="product-price">
        Price :
        <span className="discounted">
          ${!newPrice ? price.discounted : newPrice.price.discounted}
        </span>
        <span className="old">
          ${!newPrice ? price.old : newPrice.price.old}
        </span>
        <span className="totalDiscount">-{totalDiscount}% OFF</span>
      </div>
      <hr />
      <Color />
      <Sizes />
    </div>
  );
};

export default Description;
