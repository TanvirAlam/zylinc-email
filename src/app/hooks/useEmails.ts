import { trpc } from "../utils/trpc";

export const useEmails = () => {
  const { data, isLoading, error } = trpc.emailRouter.getEmails.useQuery();
  return { data, isLoading, error };
};
