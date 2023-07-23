import {
  QueriesOptions,
  QueryFunction,
  QueryKey,
  useQueries,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

import { axiosClient, BaseResponse, Params } from "core/api";

type ReqConfig<T = any> = UseQueryOptions<T, Error, T>;

type QueryParams<T> = { reqConfig?: ReqConfig<T> } & T;

type UseFetchParams<T> = Params & {
  key: QueryKey;
  reqConfig?: ReqConfig;
};

type UseFetchesParams<T> = Params & {
  queries: QueriesOptions<any>[];
};

export const useFetch = <T>({
  key,
  reqConfig,
  ...params
}: UseFetchParams<T>) => {
  const fetcher: QueryFunction<BaseResponse<T>> = () =>
    axiosClient.get<T>(params);

  return useQuery<BaseResponse<T>, Error, BaseResponse<T>, QueryKey>({
    queryKey: key,
    queryFn: fetcher,
    ...reqConfig,
  });
};

export const useFetches = <T>({ queries }: UseFetchesParams<T>) => {
  return useQueries({
    queries,
  });
};
