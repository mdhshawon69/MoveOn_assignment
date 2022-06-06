export const initialState = {
  data: {},
  loading: true,
  error: "",
  image: "",
  variants: [],
  price: {},
  skus: [],
  selected: false,
  sizes: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SELECTED":
      return {
        selected: action.selected,
      };
    case "SUCCESS":
      return {
        data: action.result,
        loading: false,
        image: action.image,
        variants: action.variants,
        price: action.price,
        skus: action.skus,
        sizes: action.sizes,
      };
    case "ERROR":
      return {
        data: {},
        loading: false,
        error: "Something went wrong",
      };
    default:
      return state;
  }
};
