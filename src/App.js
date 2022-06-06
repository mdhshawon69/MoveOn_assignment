import { createContext, useReducer, useState } from "react";
import { reducer, initialState } from "./Utils/reducer";
import Product from "./components/Product/Product";
import "./App.css";

export const DataContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [initialSelect, setInitialSelect] = useState({
    image: state.image,
    selected: false,
    sku: {
      color: "",
      size: "",
    },
  });

  return (
    <div className="App">
      <DataContext.Provider
        value={{
          productState: state,
          productDispatch: dispatch,
          initialSelect: initialSelect,
          setInitialSelect: setInitialSelect,
        }}
      >
        <Product />
      </DataContext.Provider>
    </div>
  );
}

export default App;
