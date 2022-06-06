import React, { useContext, useState } from "react";
import { DataContext } from "../../App";
import "./Gallery.css";

const Gallery = () => {
  const productContext = useContext(DataContext);
  const { data, image, selected } = productContext.productState;
  const [style, setStyle] = useState(0);

  console.log(selected);

  const borderStyle = {
    border: "2px solid #ff4747",
  };

  const selectFunc = (itemIndex) => {
    productContext.setInitialSelect({
      ...productContext.initialSelect,
      image: data.gallery[itemIndex].url,
      selected: false,
    });
    data.gallery.find((item, index) =>
      index === itemIndex ? setStyle(itemIndex) : null
    );
  };

  return (
    <div className="product-container">
      <div className="gallery">
        <div className="main-image">
          <img
            src={
              !productContext.initialSelect.image
                ? image
                : productContext.initialSelect.image
            }
            alt=""
          />
        </div>
        <div className="thumbs">
          {data.gallery.map((item, index) => (
            <img
              style={
                index === style &&
                productContext.initialSelect.selected === false
                  ? borderStyle
                  : null
              }
              src={item.thumb}
              alt="thumb"
              key={index}
              onClick={() => {
                selectFunc(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
