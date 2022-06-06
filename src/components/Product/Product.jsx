import React, { useContext, useEffect } from "react";
import { DataContext } from "../../App";
import Description from "../Description/Description";
import Gallery from "../Gallery/Gallery";
import "./Product.css";

const Product = () => {
  const productContext = useContext(DataContext);
  const { loading, error } = productContext.productState;

  useEffect(() => {
    fetch(
      "https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product"
    )
      .then((response) => response.json())
      .then((data) =>
        productContext.productDispatch({
          type: "SUCCESS",
          result: data,
          image: data.gallery[0].url,
          variants: data.variation.props[0].values,
          price: data.price,
          skus: data.variation.skus,
          gallery: data.gallery,
          sizes: data.variation.props[1].values,
        })
      )
      .catch(() => {
        productContext.productDispatch({ type: "ERROR" });
      });
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="sub-container">
        <Gallery />
        <Description />
      </div>
    </div>
  );
};

export default Product;
