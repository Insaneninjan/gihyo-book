import useSWR from "swr";
import type { ApiContext, Product } from "types/data";

export type UseProductProps = {
  id: number;
  initial?: Product;
};

export type UseProduct = {
  product?: Product;
  isLoading: boolean;
  isError: boolean;
};

/**
 * Product API custom hooks for fetch Individually
 * @param context API context
 * @param params Product ID & Initial status
 * @returns Produce & API call status
 */
const useProduct = (
  context: ApiContext,
  { id, initial }: UseProductProps
): UseProduct => {
  const { data, error } = useSWR<Product>(
    `${context.apiRootUrl.replace(/\/$/g, "")}/products/${id}`
  );

  return {
    product: data ?? initial,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useProduct;
