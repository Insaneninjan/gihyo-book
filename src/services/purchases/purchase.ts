import type { ApiContext } from "types/data";
import { fetcher } from "utils";

export type PurchaseParams = {
  productId: number;
};

/**
 * Puchase API
 * @param context API context
 * @param params Product ID
 * @returns Puchased Result message
 */
const purchase = async (
  context: ApiContext,
  params: PurchaseParams
): Promise<{ message: string }> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, "")}/purchases`, {
    method: "POST",
    headers: {
      Origin: "*",
      Accept: "application/json",
      "Content-Type": "application/json",
      credentials: "include",
    },
    body: JSON.stringify(params),
  });
};

export default purchase;
