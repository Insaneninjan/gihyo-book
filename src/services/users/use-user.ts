import useSWR from "swr";
import type { ApiContext, User } from "types/data";

export type UseUserProps = {
  id: number;
  initial?: User;
};

export type UseUser = {
  user?: User;
  isLoading: boolean;
  isError: boolean;
};

/**
 * User API custom hooks for fetch Individually
 * @param context API context
 * @returns User & api call status
 */
const useUser = (
  context: ApiContext,
  { id, initial }: UseUserProps
): UseUser => {
  const { data, error } = useSWR<User>(
    `${context.apiRootUrl.replace(/\/$/g, "")}/users/${id}`
  );

  return {
    user: data ?? initial,
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useUser;
