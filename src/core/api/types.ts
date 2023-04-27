import { AxiosRequestConfig } from "axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type BaseResponse<R> = {
  code: number;
  message: string;
  isSuccessful: boolean;
  data: R;
};

export type Params<T> = {
  url: string;
  query?: Query;
  options?: T;
};

export type Data<D> = {
  data: D;
};

export type PostParams<T> = Data<T>;

export type Query = { [key in string]: string };

export interface HttpClient<PO> {
  get: <R>(params: Params<PO>) => Promise<BaseResponse<R>>;

  post: <T, R>(params: PostParams<T> & Params<PO>) => Promise<BaseResponse<R>>;

  put: <T, R>(params: PostParams<T> & Params<PO>) => Promise<BaseResponse<R>>;

  delete: <T, R>(
    params: PostParams<T> & Params<PO>
  ) => Promise<BaseResponse<R>>;
}
