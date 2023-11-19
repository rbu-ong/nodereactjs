import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveProduct } from "../store/productSlice";
import { uiActions } from "../store/uiSlice";

const INITIAL_FORM_STATE = {
  productName: "",
};

export default function ProductForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(saveProduct(formData));
    dispatch(uiActions.toggle());
    setFormData(INITIAL_FORM_STATE);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        type="text"
        name="productName"
        value={formData.productName}
        onChange={handleChange}
      />
      <button type="submit">Save Product</button>
    </form>
  );
}
