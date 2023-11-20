import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProduct } from "../store/productSlice";
import { uiActions } from "../store/uiSlice";
import { productActions } from "../store/productSlice";

const INITIAL_FORM_STATE = {
  productName: "",
};

export default function ProductForm() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const selectedProduct = useSelector((state) => state.product.editingProduct);

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch(
      productActions.editProduct({
        ...selectedProduct,
        [name]: value,
      })
    );

    console.log(selectedProduct);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(saveProduct(selectedProduct));
    dispatch(uiActions.toggle());
    setFormData(INITIAL_FORM_STATE);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label
        htmlFor="productName"
        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          type="text"
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
          placeholder="Product Name"
          name="productName"
          value={selectedProduct.productName}
          onChange={handleChange}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Product Name
        </span>
      </label>
      <button
        className="mr-2"
        onClick={() => {
          dispatch(productActions.editProduct(""));
          dispatch(uiActions.toggle(0));
        }}
      >
        Cancel
      </button>
      <button className="bg-green-600 mt-2 mb-5" type="submit">
        {selectedProduct.productId ? "Update" : "Save"} Product
      </button>
    </form>
  );
}
