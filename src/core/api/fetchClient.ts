import {
  BaseResponse,
  HttpClient,
  Params as BaseParams,
  PostParams,
} from "./types";

type Params = BaseParams<RequestInit>;

class FetchClient implements HttpClient<RequestInit> {
  static createInstance() {
    return new FetchClient();
  }

  static getDataParsed(r: any) {
    return {
      data: r,
      code: 200,
      message: "Success",
      isSuccessful: true,
    };
  }

  static async requestMakeHelper(
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ) {
    const f = await fetch(input, init);
    const r = await f.json();

    return FetchClient.getDataParsed(r);
  }

  static getErrorResponse(r: any) {
    return {
      data: {} as any,
      code: 500,
      message: "Something went wrong",
      isSuccessful: false,
    };
  }

  async get<R>(params: Params): Promise<BaseResponse<R>> {
    const options = {
      method: "GET",
      ...params.options,
    };

    // eslint-disable-next-line no-async-promise-executor
    let response: BaseResponse<R>;

    const query = new URLSearchParams(params.query);

    try {
      response = await FetchClient.requestMakeHelper(
        params.url + query,
        options
      );
    } catch (e: any) {
      response = FetchClient.getErrorResponse(e);
    }

    return response;
  }

  async post<T, R>(params: PostParams<T> & Params): Promise<BaseResponse<R>> {
    let response: BaseResponse<R>;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params.data),
      ...params.options,
    };

    const query = new URLSearchParams(params.query);

    try {
      response = await FetchClient.requestMakeHelper(
        params.url + query,
        requestOptions
      );
    } catch (e: any) {
      response = FetchClient.getErrorResponse(e);
    }

    return response;
  }

  async put<T, R>(params: PostParams<T> & Params): Promise<BaseResponse<R>> {
    let response: BaseResponse<R>;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params.data),
      ...params.options,
    };

    const query = new URLSearchParams(params.query);

    try {
      response = await FetchClient.requestMakeHelper(
        params.url + query,
        requestOptions
      );
    } catch (e: any) {
      response = FetchClient.getErrorResponse(e);
    }

    return response;
  }

  async delete<T, R>(params: PostParams<T> & Params): Promise<BaseResponse<R>> {
    let response: BaseResponse<R>;

    const requestOptions = {
      method: "DELETE",
      ...params.options,
    };

    try {
      response = await FetchClient.requestMakeHelper(
        params.url,
        requestOptions
      );
    } catch (e: any) {
      response = FetchClient.getErrorResponse(e);
    }

    return response;
  }
}

export const fetchClient = FetchClient.createInstance();
