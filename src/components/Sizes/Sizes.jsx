import React, { useContext, useState } from "react";
import { DataContext } from "../../App";
import "./Sizes.css";

const Sizes = () => {
  const productContext = useContext(DataContext);
  const { sizes, skus } = productContext.productState;
  const [style, setStyle] = useState("");
  const [sizeName, setSizeName] = useState("");
  const sku = productContext.initialSelect.sku;

  const borderStyle = {
    border: "2px solid #ff4747",
  };

  const selectFunc = (name, itemIndex, id) => {
    setSizeName(name);
    productContext.setInitialSelect({
      ...productContext.initialSelect,
      sku: { ...sku, size: id },
    });
    sizes.find((item, index) =>
      index === itemIndex ? setStyle(itemIndex) : null
    );
  };

  return (
    <div className="sizes-container">
      <span className="size-title">
        Size : <span className="size-name">{sizeName}</span>
      </span>
      <div className="sizes-block">
        {sizes.map((item, index) => (
          <div
            className="sizes"
            key={index}
            style={index === style ? borderStyle : null}
            onClick={() => selectFunc(item.title, index, item.id)}
          >
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sizes;
