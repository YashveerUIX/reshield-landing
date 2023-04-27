import axios, { Axios, AxiosRequestConfig } from "axios";

import { apiUrlConfig } from "./endpoints";
import { BaseResponse, HttpClient, Params, PostParams } from "./types";

class AxiosClient implements HttpClient<AxiosRequestConfig> {
  instance: Axios;

  constructor() {
    this.instance = axios.create({
      baseURL: apiUrlConfig.baseUrl,
      timeout: 1000,
      headers: { "X-Custom-Header": "foobar" },
    });
  }

  static createInstance() {
    return new AxiosClient();
  }

  static getDataParsed(r: any) {
    return {
      data: r,
      code: 200,
      message: "Success",
      isSuccessful: true,
    };
  }

  static getErrorResponse(r: any) {
    return {
      data: {} as any,
      code: 500,
      message: "Something went wrong",
      isSuccessful: false,
    };
  }

  async get<R>({
    url,
    options,
    query,
  }: Params<AxiosRequestConfig>): Promise<BaseResponse<R>> {
    let response: BaseResponse<R>;

    try {
      const r = await this.instance.get(url, {
        params: query,
        ...options,
      });

      response = AxiosClient.getDataParsed(r);
    } catch (e: any) {
      response = AxiosClient.getErrorResponse(e);
    }

    return response;
  }

  async post<T, R>({
    data,
    url,
    options,
    query,
  }: PostParams<T> & Params<AxiosRequestConfig>): Promise<BaseResponse<R>> {
    let response: BaseResponse<R>;

    try {
      const r = await this.instance.post(url, data, {
        params: query || {},
        ...options,
      });

      response = AxiosClient.getDataParsed(r);
    } catch (e: any) {
      response = AxiosClient.getErrorResponse(e);
    }

    return response;
  }

  async put<T, R>({
    data,
    url,
    options,
    query,
  }: PostParams<T> & Params<AxiosRequestConfig>): Promise<BaseResponse<R>> {
    let response: BaseResponse<R>;

    try {
      const r = await this.instance.put(url, data, {
        params: query || {},
        ...options,
      });

      response = AxiosClient.getDataParsed(r);
    } catch (e: any) {
      response = AxiosClient.getErrorResponse(e);
    }

    return response;
  }

  async delete<T, R>({
    url,
    options,
  }: PostParams<T> & Params<AxiosRequestConfig>): Promise<BaseResponse<R>> {
    let response: BaseResponse<R>;

    try {
      const r = await this.instance.delete(url, {
        ...options,
      });

      response = AxiosClient.getDataParsed(r);
    } catch (e: any) {
      response = AxiosClient.getErrorResponse(e);
    }

    return response;
  }
}

export const axiosClient = AxiosClient.createInstance();
