## Project structure

This project uses import alias which means every import is relative to the root folder.
E.g. to import main `App` component the code would be `import App from 'components/App';`.
Very useful down the road.

---

v1

```
src
└── components (store all reusable components here)
└── containers (effectively a collection of sub-routes)
└──── e.g. AdminContainer (manages all routes matching ^/admin.*)
└── routers (collection of top-level routers which pass info down to their respective containers)
└── utils (place to store Context, HOCs, hooks that are shared across the app)
└── views (place to store views; each view should match 1 route)
```

## Available Scripts

---

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
- [node-sass](https://github.com/sass/node-sass) for SASS support ([classnames](https://github.com/JedWatson/classnames) is also recommended)

  - create `typings.d.ts` file in the root dir and add the following content:

    ```
    declare module '*.scss' {
      const content: { [className: string]: string };

      export default content;
    }
    ```

- [moment](https://github.com/moment/moment) for handling dates
- [notistack](https://github.com/iamhosseindhv/notistack) for handling snackbar messages ([Material-UI](https://github.com/mui-org/material-ui) is a requirement)
- [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) for navigation
- [react-use](https://github.com/streamich/react-use) - provides a lot of useful hooks
- [redux](https://github.com/reduxjs/redux) + [reselect](https://github.com/reduxjs/reselect)
  - [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) & [redux-logger](https://github.com/LogRocket/redux-logger) for easier development
- [react-apollo](https://github.com/apollographql/react-apollo) for GraphQL integration
- [styled-components](https://github.com/styled-components/styled-components) for styled components :P
- [aphrodite](https://github.com/Khan/aphrodite) for CSS-in-JS solution
- [awesome-react](https://github.com/enaqx/awesome-react) for a list of packages/articles about React ecosystem
