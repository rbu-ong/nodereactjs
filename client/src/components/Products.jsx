import { useEffect } from "react";
import { fetchProduct, deleteProduct } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const deleteHandler = (productid) => {
    console.log(e);
  };

  return (
    <div>
      <h2>List of Products</h2>
      <ul style={{ listStyle: "number" }}>
        {product &&
          product.products.map((product) => (
            <li key={product.id}>
              {product.productname}{" "}
              <button
                onClick={() => {
                  dispatch(deleteProduct(product.id));
                }}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
