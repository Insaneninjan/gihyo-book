import type { ApiContext, Product } from "types/data";
import { fetcher } from "utils";

export type AddProductsParams = {
  product: Omit<Product, "id">;
};

/**
 * Product API New
 * @param context API context
 * @param params new Product
 * @returns new added Product
 */
const addProduct = async (
  context: ApiContext,
  { product }: AddProductsParams
): Promise<Product> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, "")}/products`, {
    method: "POST",
    headers: {
      Origin: "*",
      Accept: "application/json",
      "Content-Type": "application/json",
      credentials: "include",
    },
    body: JSON.stringify(product),
  });
};

export default addProduct;
