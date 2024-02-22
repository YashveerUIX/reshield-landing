interface ArgsType {
  event: string;
  url: string;
  meta?: Object;
}

// initialize tracker here, keep in mind to instantiate only one instance

const Tracker = (() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const push = (args: ArgsType): void => {
    // tracker code goes here
  };

  return { push };
})();

export default Tracker;
