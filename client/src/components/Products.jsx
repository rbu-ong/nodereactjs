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
      <h2 className="font-bold">List of Products</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead class="ltr:text-left rtl:text-right">
            <tr>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Product Number
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Product Name
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Actions
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            {product &&
              product.products.map((product) => (
                <tr>
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {product.id}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    {product.productname}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    <button
                      onClick={() => {
                        dispatch(deleteProduct(product.id));
                      }}
                      class="inline-block rounded bg-red-800 px-4 py-2 text-xs font-medium text-white hover:text-white hover:bg-gray-500"
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
