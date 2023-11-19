import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductForm from "./components/productForm";
import Products from "./components/Products";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/uiSlice";

function App() {
  const dispatch = useDispatch();
  const isFormVisible = useSelector((state) => state.ui.isFormVisible);

  return (
    <>
      {isFormVisible ? <ProductForm /> : ""}
      <Products />
      <button
        onClick={() => {
          dispatch(uiActions.toggle());
        }}
      >
        Add Product
      </button>
    </>
  );
}

export default App;
