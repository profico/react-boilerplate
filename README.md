## Project structure

This project uses import alias which means every import is relative to the root folder.
E.g. to import main `App` component the code would be `import App from 'components/App';`.
Very useful down the road.

> This boilerplate was set up according to the guidelines in https://github.com/profico/react-boilerplate/blob/master/style-guide.md. The structure below extends the base project structure defined in the style guide.

```
src
└── i18n (optional)
└──── en_US
└──── hr_HR
└──── index.ts
└── graphql (optional)
└──── queries
└──── mutations
└──── models
└── redux (optional)
└──── actions
└──── reducers
└──── types
└──── store.ts
└── services (place to store services which communicate with the backend)
└── styles (place to store basic styles settings such as variables, mixins etc.)
```

> Some of the listed folders are not created in the repository to keep the repository size smaller and easier to customize.

## Available Scripts

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

## Recommended libraries

- [axios](https://github.com/axios/axios) for handling API calls
- [core-js](https://github.com/zloirock/core-js) & [react-app-polyfill](https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill) for older browser support
- [sass](https://github.com/sass/sass) for SASS support ([clsx](https://github.com/lukeed/clsx) is also recommended)

  - create `typings.d.ts` file in the root dir and add the following content:

    ```
    declare module '*.scss' {
      const content: { [className: string]: string };

      export default content;
    }
    ```

- [Material-UI](https://github.com/mui-org/material-ui) for UI components
- ~~[moment](https://github.com/moment/moment) for handling dates~~ DEPRECATED
- [dayjs](https://github.com/iamkun/dayjs) for handling dates (almost same API as moment)
- [notistack](https://github.com/iamhosseindhv/notistack) for handling snackbar messages ([Material-UI](https://github.com/mui-org/material-ui) is a requirement)
- [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) for navigation
- [react-use](https://github.com/streamich/react-use) - provides a lot of useful hooks
- [redux](https://github.com/reduxjs/redux) + [reselect](https://github.com/reduxjs/reselect) for global state management
  - [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) & [redux-logger](https://github.com/LogRocket/redux-logger) for easier development
- [react-apollo](https://github.com/apollographql/react-apollo) for GraphQL integration
- [styled-components](https://github.com/styled-components/styled-components) for styled components
- [aphrodite](https://github.com/Khan/aphrodite) for CSS-in-JS solution
- [awesome-react](https://github.com/enaqx/awesome-react) for a list of packages/articles about React ecosystem
