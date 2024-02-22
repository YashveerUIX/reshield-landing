/* eslint-disable @typescript-eslint/no-explicit-any */
import mixpanel, { Dict } from "mixpanel-browser";

const env_check = true;

export const useMixPanel = (): {
  actions: {
    identify: (id: string) => any;
    alias: (id: string) => void;
    track: (name: string, props?: Dict) => void;
    people: {
      set: (props: Dict) => void;
    };
  };
} => {
  const actions = {
    identify: (id: string) => {
      mixpanel.identify(id);
    },
    alias: (id: string) => {
      mixpanel.alias(id);
    },
    track: (name: string, props?: Dict) => {
      mixpanel.track(name, props);
    },
    people: {
      set: (props: Dict) => {
        mixpanel.people.set(props);
      },
    },
  };

  return { actions };
};
