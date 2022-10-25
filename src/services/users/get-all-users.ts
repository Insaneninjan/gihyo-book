import type { ApiContext, User } from "types/data";
import { fetcher } from "utils";

/**
 * User API list
 * @param context API context
 * @returns User List
 */
const getAllUsers = async (context: ApiContext): Promise<User[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, "")}/users`, {
    headers: {
      Origin: "*",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export default getAllUsers;
