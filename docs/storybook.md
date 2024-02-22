## How to use storybook

Storybook is used for showcasing the pre-built core components which can be used throughout the project.

### Run storybook

Open a new terminal and run `yarn storybook`. Storybook will automatically open in a new tab of your browser.

## Development

If anyone wants to create a new core component and wants to test it in storybook, the following steps can be followed-

- Create a new folder inside `src/uikit/`
- Add the component there following the standard practice which can be seen with other components
- Add a story file in `./stories` folder, the name should be `{ComponentName}.stories.mdx`
- Follow the standard way (check other stories) to describe the newly made component with examples
- Additional: add prop details in the component so that anyone can tweak the props and play with the component. Check [this](https://storybook.js.org/docs/react/essentials/controls) link.
