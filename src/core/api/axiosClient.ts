import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { baseUrl } from "./baseUrlConfig";
import { BaseResponse, HttpClient, Params, PostParams } from "./types";

export const headers = {
  "Content-Type": "application/json",
};

class AxiosClient implements HttpClient {
  static instance: AxiosInstance;

  constructor() {
    AxiosClient.instance = axios.create({
      baseURL: baseUrl,
      headers,
      timeout: 30000,
    });

    AxiosClient.instance.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      config.headers.Authorization = `Bearer ${token || ""}`;

      return config;
    });
  }

  static createInstance() {
    return new AxiosClient();
  }

  static getDataParsed(r: BaseResponse) {
    return {
      ...(r || {}),
      isSuccessful: true,
    };
  }

  static getErrorResponse(r: BaseResponse) {
    return { ...(r || {}), isSuccessful: false };
  }

  static async requestMakeHelper<R>(config: AxiosRequestConfig) {
    let res;
    try {
      res = await this.instance<BaseResponse<R>>(config);
      return AxiosClient.getDataParsed(res.data);
    } catch (e) {
      return AxiosClient.getErrorResponse(res?.data as any);
    }
  }

  async get<R>(params: Params): Promise<BaseResponse<R>> {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: params.url,
      params: params.query,
      ...params.options,
    };

    const res = await AxiosClient.requestMakeHelper(options);

    return res;
  }

  async post<T, R>(params: PostParams<T>): Promise<BaseResponse<R>> {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: params.url,
      params: params.query,
      data: params.data,
      ...params.options,
    };

    const res = await AxiosClient.requestMakeHelper(options);

    return res;
  }

  async put<T, R>(params: PostParams<T>): Promise<BaseResponse<R>> {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: params.url,
      params: params.query,
      data: params.data,
      ...params.options,
    };

    const res = await AxiosClient.requestMakeHelper(options);

    return res;
  }

  async delete<T, R>(params: PostParams<T>): Promise<BaseResponse<R>> {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      url: params.url,
      params: params.query,
      data: params.data,
      ...params.options,
    };

    const res = await AxiosClient.requestMakeHelper(options);

    return res;
  }
}

export const axiosClient = AxiosClient.createInstance();
