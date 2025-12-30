import { queryOptions } from "@tanstack/react-query";
import {
  fetchUsingUseQuery,
  fetchUsingUseSuspenseQuery,
  fetchUsingUseSuspenseQueryInLoader,
} from "./api";
import { constantKey } from "../constants/key.constant";

export const createQueryOptions = () => {
  return queryOptions({
    queryKey: constantKey.useQueryInLoader,
    queryFn: fetchUsingUseQuery,
  });
};

export const createQueryOptionsForSuspense = () => {
  return queryOptions({
    queryKey: constantKey.useSuspenseQuery,
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 2000));
      return fetchUsingUseSuspenseQuery();
    },
  });
};

export const createQueryOptionsForSuspenseInLoader = () => {
  return queryOptions({
    queryKey: constantKey.useSuspenseQueryInLoader,
    queryFn: fetchUsingUseSuspenseQueryInLoader,
  });
};
