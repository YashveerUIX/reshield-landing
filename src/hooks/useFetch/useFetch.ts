import useSWR, { Fetcher, Key, SWRConfiguration, SWRResponse } from "swr";

import { sanitizeOptions } from "./helper";

/***
 * url: absolute url of the API e.g https://dev.com/user?include=details
 *
 * options: request options to pass to fetch. body, header and other config go inside this.
 * See https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
 *
 * configOverride: options to override default SWR config.
 * See https://swr.vercel.app/docs/options#options
 *
 * enabled: boolean flag to conditionally enable/disable fetching.
 * usefetch will not fetch the passed url if enabled is passed false.
 */

interface FetchArgTypes {
  url: string;
  options?: RequestInit;
  configOverride?: SWRConfiguration;
  enabled?: boolean;
}

const useFetch = <T>({
  url,
  options,
  configOverride = {},
  enabled = true,
}: FetchArgTypes): SWRResponse<T, Error> => {
  const fetcher: Fetcher<T, Key> = async (
    url: string,
    options?: RequestInit
  ): Promise<T> => {
    const res = await fetch(url, options);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error: Error = new Error("Failed to fetch");
      throw error;
    }

    return res.json();
  };

  const config = {
    shouldRetryOnError: false,
  };
  const sanitizedOptions = sanitizeOptions(options);
  return useSWR<T, Error>(
    () => (enabled ? [url, sanitizedOptions] : null),
    fetcher,
    {
      ...config,
      ...configOverride,
    }
  );
};

export default useFetch;
