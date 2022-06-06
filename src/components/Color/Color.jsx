import React, { useContext, useState } from "react";
import { DataContext } from "../../App";
import "./Color.css";

const Color = () => {
  const productContext = useContext(DataContext);
  const { variants } = productContext.productState;
  const [style, setStyle] = useState("");
  const [color, setColor] = useState("");
  const sku = productContext.initialSelect.sku;

  const borderStyle = {
    border: "2px solid #ff4747",
  };

  const selectFunc = (img, itemIndex, id, title) => {
    setColor(title);
    productContext.setInitialSelect({ image: img, sku: { ...sku, color: id } });
    variants.find((item, index) =>
      index === itemIndex ? setStyle(itemIndex) : null
    );
  };

  return (
    <div className="color-container">
      <span className="color-title">
        Color : <span className="color-name">{color}</span>
      </span>
      {variants.map((item, index) => (
        <img
          className="variant-image"
          style={index === style ? borderStyle : null}
          src={item.thumb}
          alt={item.name}
          key={index}
          onClick={() => selectFunc(item.image, index, item.id, item.title)}
        />
      ))}
    </div>
  );
};

export default Color;
