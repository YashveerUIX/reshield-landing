/* eslint-disable no-unused-vars */
enum Enviroment {
  PROD = "prod",
  DEV = "DEV",
}

export const rootUrlConfig = {
  [Enviroment.DEV]: {
    baseUrl: "",
  },
  [Enviroment.PROD]: {
    baseUrl: "",
  },
};

// eslint-disable-next-line no-constant-condition
export const baseUrl = true
  ? rootUrlConfig[Enviroment.DEV].baseUrl
  : rootUrlConfig[Enviroment.PROD].baseUrl;
