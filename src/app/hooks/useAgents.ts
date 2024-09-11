import { trpc } from "../utils/trpc";

export const useAgents = () => {
  const { data, isLoading, error } = trpc.agentRouter.getAgents.useQuery();
  return { data, isLoading, error };
};
