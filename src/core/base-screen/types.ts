import React, { ReactNode } from "react";
import { WithRouterProps } from "next/dist/client/with-router";

// import { Dispatch as StoreDispatch,State as StoreState } from "store/store";

// Assign thees types when global state management is being implemented
// export type State = StoreState;
// export type Dispatch = StoreDispatch;

export type State = any;
export type Dispatch = any;

export interface LayoutOptions<Props = any, State = any> {
  bgColor?: string;
  padding?: number;
  type?: ScreenType;
}

export enum ScreenType {
  FETCH = "fetch",
}

export interface LayoutContext {
  getLayoutOptions: (refresh?: boolean) => LayoutOptions;
  showModal: (obj: {
    modalContent: ReactNode;
    cb?: (() => void) | undefined;
    config?: any;
  }) => void;
  hideModal: (
    e?: React.MouseEvent<HTMLElement>,
    cb?: (() => void) | undefined
  ) => void;
}

export type ScreenContext = LayoutContext;

export interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
  unstable_skipClientCache?: boolean;
}

export type BaseScreenProps = WithRouterProps & {
  saveAuthToken: (token: string) => void;
  saveUserData: (data: any) => void;

  store: State;
  userData: any;

  dispatch: Dispatch;
};

export interface BaseScreenState {
  loading?: boolean;
  loadingMore?: boolean;

  error?: boolean;
  errorData?: any;
  modals?: ModalItem[];

  data: any;
}

export interface ModalItem {
  content: ReactNode;
  config?: any;
}

export interface PageData {
  store: State;
  data: any;
}
