import React, { ReactNode } from "react";
import { Box } from "uikit";

import {
  BaseScreenProps,
  BaseScreenState,
  LayoutContext,
  LayoutOptions,
  PageData,
  ScreenContext,
  ScreenType,
  TransitionOptions,
} from "./types";

class BaseScreen<
  P extends BaseScreenProps = BaseScreenProps,
  S extends BaseScreenState = BaseScreenState,
  R = any
> extends React.Component<P, S> {
  static layoutOptions: LayoutOptions<BaseScreenProps, BaseScreenState> = {
    bgColor: "grey200",
    type: ScreenType.FETCH,
    padding: 16,
  };

  public readonly state: Readonly<S> = {
    loading: true,
    error: false,
    errorData: undefined,
  } as Readonly<S>;

  getScreenType = (): ScreenType | undefined => {
    return (this?.constructor as typeof BaseScreen)?.layoutOptions?.type;
  };

  getLayoutOptions(): LayoutOptions {
    const prop = (this.constructor as typeof BaseScreen).layoutOptions;
    const defProp = BaseScreen.layoutOptions;
    return { ...defProp, ...prop };
  }

  /**
   * Returns screen context.
   */
  getScreenContext = (refresh?: boolean): ScreenContext => {
    return {
      ...this.getLayoutContext(),
      // example - getSession: this.getSession,
    };
  };

  /**
   * Get all layout related methods
   */
  getLayoutContext = (): LayoutContext => ({
    getLayoutOptions: this.getLayoutOptions,
    showModal: this.showModal,
    hideModal: this.hideModal,
  });

  getResponse() {
    return this.getScreenData();
  }

  reload() {
    this.init(true);
  }

  // override in base class for any api calls
  fetchData(): Promise<R> {
    return Promise.reject();
  }

  async fetch() {
    return await this.fetchData();
  }

  fetchMoreData(): Promise<R> {
    return Promise.reject();
  }

  // override in your screen for performing the actual rendering
  // render function wont be required
  renderScreen(_data: PageData): ReactNode {
    return null;
  }

  // override in your screen for rendering the loading interaction for the screen
  renderLoader() {
    return <Box flex={1} justifyContent="center" alignItems="center"></Box>;
  }

  // override in your screen for rendering the error interaction for the screen
  renderError() {
    return null;
  }

  componentDidMount(): void {
    this.init(true);
  }

  init(force?: boolean) {
    if (!force && !this.state.loading) {
      return;
    }
    this.setState({
      loading: true,
    });

    this.fetch()
      ?.then((res: R) => {
        this.setState({
          loading: false,
          data: res,
        });
      })
      .catch((e) => {
        this.setState({
          error: true,
          errorData: e,
          loading: false,
        });
      });
  }

  addDataInStore({ cb, data }: { data: any; cb: any }): void {
    this.props.dispatch(cb(data));
  }

  getDataFromStore(key: string) {
    return (this.props.store as any)[key];
  }

  //This function will push page in current history.
  async pushPage(route: string, options?: TransitionOptions) {
    return this.props.router.push(route, undefined, {
      shallow: true,
      scroll: true,
      ...(options || {}),
    });
  }

  //This function will create new history in the router object, and will push all together a new URL.
  async replacePage(route: string, options?: TransitionOptions) {
    return this.props.router.replace(route, undefined, {
      shallow: true,
      scroll: true,
      ...(options || {}),
    });
  }

  getPath() {
    return this.props.router.pathname;
  }

  isModalOpen = () =>
    this.state.modals && this.state.modals.length > 0 ? true : false;

  /**
   * Show Modal
   * @param modalContent Content inside modal
   * @param cb Callback post show modal
   */
  showModal = ({
    modalContent,
    cb,
    config,
  }: {
    modalContent: ReactNode;
    cb?: (() => void) | undefined;
    config?: any;
  }) => {
    const { modals = [] } = this.state;
    modals.push({ content: modalContent, config });
    this.setState({ modals: [...modals] }, cb);
  };

  /**
   * Hide modal
   */
  hideModal = (
    e?: React.MouseEvent<HTMLElement>,
    cb?: (() => void) | undefined
  ) => {
    const { modals = [] } = this.state;
    modals.pop();
    this.setState({ modals: [...modals] }, () => {
      if (!!cb && typeof cb === "function") {
        cb();
      }
    });
  };

  renderEmptyComponent = () => {
    return null;
  };

  getScreenData = () => {
    return {
      store: this.props.store,
      data: this.state.data,
    };
  };

  private renderModals() {
    const { modals = [] } = this.state;
    return modals.map((modal, idx) => (
      // Todo
      // <ModalComp

      // />
      <div
        key={idx}
        style={{
          display: "flex",
          position: "absolute",
          top: "50%",
          left: "50%",
          background: "red",
        }}
      >
        {modal.content}
      </div>
    ));
  }

  render(): ReactNode {
    const containerProps = { style: { flex: 1 } };

    if (this.state.loading) {
      if (this.getScreenType() === ScreenType.FETCH) {
        return (
          <Box {...containerProps}>
            <Box
              padding={this.getLayoutOptions().padding}
              flexGrow={1}
              justifyContent="center"
              alignItems="center"
              backgroundColor={this.getLayoutOptions().bgColor}
            >
              {this.renderLoader()}
            </Box>
          </Box>
        );
      }
    } else if (this.state.error) {
      return this.renderError();
    }

    return (
      <Box {...containerProps} padding={this.getLayoutOptions().padding}>
        <>
          {this.renderScreen(this.getScreenData())}
          {this.renderModals()}
        </>
      </Box>
    );
  }
}

export default BaseScreen;
