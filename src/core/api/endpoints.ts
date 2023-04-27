enum Configs {
  DEV,
  PROD,
}

type Config = {
  baseUrl: string;
};

const config: { [k in Configs]: Config } = {
  [Configs.DEV]: {
    baseUrl: "",
  },
  [Configs.PROD]: {
    baseUrl: "",
  },
};

// eslint-disable-next-line no-constant-condition
export const apiUrlConfig = true ? config[Configs.DEV] : config[Configs.PROD];
