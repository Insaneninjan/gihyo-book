import type { ApiContext } from "types/data";
import { fetcher } from "utils";

/**
 * Auth API Signout
 * @param context APIcontext
 * @returns Signout message
 */
const signout = async (context: ApiContext): Promise<{ message: string }> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/auth/signout`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};

export default signout;
