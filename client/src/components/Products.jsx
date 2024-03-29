import { useEffect } from "react";
import {
  fetchProduct,
  deleteProduct,
  productActions,
} from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/uiSlice";

export default function Products() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const editHandler = (productDetails) => {
    dispatch(productActions.editProduct(productDetails));
    dispatch(uiActions.toggle(true));
  };

  return (
    <div>
      <h2 className="font-bold">List of Products</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Product Number
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Product Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {product &&
              product.products.map((product) => (
                <tr key={product.id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {product.id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {product.productname}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <button
                      onClick={() => {
                        editHandler({
                          productId: product.id,
                          productName: product.productname,
                        });
                      }}
                      className="inline-block rounded mr-2 bg-blue-800 px-4 py-2 text-xs font-medium text-white hover:text-white hover:bg-gray-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        dispatch(deleteProduct(product.id));
                      }}
                      className="inline-block rounded bg-red-800 px-4 py-2 text-xs font-medium text-white hover:text-white hover:bg-gray-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
