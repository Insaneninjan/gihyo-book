import type { ApiContext, Product } from "types/data";
import { fetcher } from "utils";

export type GetProductParams = {
  id: number;
};

/**
 * Product API fetch Individually
 * @param context API context
 * @param params Product ID
 * @returns Product
 */
const getProduct = async (
  context: ApiContext,
  { id }: GetProductParams
): Promise<Product> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/products/${id}`,
    {
      headers: {
        Origin: "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};

export default getProduct;
