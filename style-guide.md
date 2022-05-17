# Style Guide

We'll be using multiple Airbnb's style guides as "base" guides:

- [JavaScript](https://github.com/airbnb/javascript)
- [React](https://github.com/airbnb/javascript/tree/master/react)
- [CSS & Sass](https://github.com/airbnb/css)

Since we're applying different eslint configs that are combined with Airbnb's [config](https://yarnpkg.com/package/eslint-config-airbnb), large number of these rules are already enforced.
Additional rules that can be applied to have an universal style of coding across apps:

<br />

## Import statements

- Group different types of import statements for better overview.
  Order should be:

  - absolute path default imports
    - 3rd party libs, e.g. `import React from 'react'`
    - local aliases, e.g. `import App from 'components/App'`
  - absolute path named imports
    - 3rd party libs, e.g. `import { useWindowSize } from 'react-use'`
    - local aliases, e.g. `import { Breakpoints } from 'utils/shared'`
  - relative path default imports
    - e.g. `import SideMenu from './partials/SideMenu'`
  - relative path named imports
    - e.g. `import { Breakpoints } from '../utils/shared'`
  - style imports
    - e.g. `import styles from './app.module.scss` or `import styles from ./app.style.ts`

  > There should be an empty line between import groups.

  > Prefer default imports when available. E.g. `import isEmpty from 'lodash/isEmpty` instead of `import { isEmpty } from 'lodash'`. Results in a smaller bundle size (depending on your bundler).

  > Install `@profi.co/eslint-plugin` to fix import errors automatically.

- Full example WITHOUT path aliasing:

  ```javascript
  import React, { useState } from 'react';

  import { useMount, useUnmount, useWindowSize } from 'react-use';

  import Text from '../../components/Text';
  import Navbar from '../../components/Navbar';
  import GettingStarted from './partials/GettingStarted';
  import SideMenu from './partials/SideMenu';

  import { Body, Flex } from '../../components/Layout';
  import { faq, Category } from '../../config/faq';
  import { filterQA } from './Help.helpers';

  import styles from './help.module.scss';
  ```

- Full example WITH path aliasing:

  ```javascript
  import React, { useState } from 'react';
  import Text from 'components/Text';
  import Navbar from 'components/Navbar';

  import { useMount, useUnmount, useWindowSize } from 'react-use';
  import { Body, Flex } from 'components/Layout';
  import { faq, Category } from 'config/faq';

  import GettingStarted from './partials/GettingStarted';
  import SideMenu from './partials/SideMenu';

  import { filterQA } from './Help.helpers';

  import styles from './help.module.scss';
  ```

<br />

# Project structure

### _src/components_

- Every component in `src/components` should have the following structure:
  ```
  src
  └── components
  └──── ComponentName
  └─────── __tests__
  └────────── ComponentName.test.tsx
  └─────── HelperComponent (if needed)
  └────────── HelperComponent.tsx
  └────────── index.ts
  └─────── ComponentName.tsx
  └─────── withComponentName.tsx (HOC, if necessary)
  └─────── index.ts
  ```

### _src/contexts_

- Every context component in `src/contexts` extends the `src/components/*` structure.
  ```
  src
  └── contexts
  └──── index.ts (can be used to export all contexts from this directory - not required)
  └──── AuthContext
  └─────── __tests__
  └────────── AuthContext.test.tsx
  └─────── AuthContext.tsx
  └─────── withAuth.tsx (if necessary)
  └─────── useAuth.ts (if necessary)
  └─────── index.ts
  ```

### _src/hooks_

- Simple collection of `use*.ts` files. All hooks must start with `use` prefix.
  ```
  src
  └── hooks
  └──── index.ts (can be used to export all hooks from this directory - not required)
  └──── useDocumentTitle.ts
  ```

### _src/routers_

- This folder can be a simple list of router components. Extending the `src/components/*` structure is not required.
  > Example without folder structure: https://github.com/profico/react-boilerplate-typescript/tree/master/src/routers/index.ts

### _src/utils_

- Usually, here we store utility classes and helper functions that are used across the app.
- Outline structure should look something like:
  ```
  utils
  └── functions (can be just a collection of .ts files)
  └───── e.g. objects.ts
  └── static (collection of static classes)
  └───── e.g. ScriptUtils
  ```

### _src/views_

- View components (`src/views/*`) extend the component structure from `src/components` with an addition of `partials` directory in which all the components that belong to that view are stored.
  - Components inside `partials` directory cannot have their own `"partials"` directory!
    > Example: https://github.com/profico/react-boilerplate-typescript/tree/master/src/views/Home

<br />

# Component structure

### _Functional component (arrow function)_

```tsx
import React from 'react';

interface MyComponentProps {}
type MyComponentProps = {};

const MyComponent: React.FC<MyComponentProps> = props => {};

export default MyComponent;
```

### _Functional component (regular function)_

```tsx
import React from 'react';

interface MyComponentProps {}
type MyComponentProps = {};

function MyComponent(props: MyComponentProps) {}

export default MyComponent;
```

### _Functional component with generic props_

```tsx
import React from 'react';

interface MyComponentProps<T> extends T {}
type MyComponentProps<T> = T & {};

function MyComponent<T>(props: MyComponentProps<T>) {}

export default MyComponent;
```

### _Context_

```tsx
import React from 'react';

import { User } from './some-typings';

interface CurrentUserContextValues {
  user: User | undefined;
}

export const CurrentUserContext = React.createContext<CurrentUserContextValues>({ user: undefined });
export const useCurrentUserContext = (): CurrentUserContextValues => React.useContext(CurrentUserContext);
```

### _Context (with wrapper)_

```tsx
import React from 'react';

import { User } from './some-typings';

interface CurrentUserContextValues {
  user: User | undefined;
}
// Or if we need to save both state and some actions in the context
interface CurrentUserContextValues {
  state: {
    user: User | undefined;
  };
  actions: {
    setUser(user: User): void;
    resetUser(): Promise<void>;
  };
}

interface CurrentUserProviderProps {
  id: string;
}

const CurrentUserContext = React.createContext<CurrentUserContextValues>({ user: undefined });
// or
const CurrentUserContext = React.createContext<CurrentUserContextValues>({
  state: {
    user: undefined,
  },
  actions: {
    setUser() {},
    async resetUser() {},
  },
});
// or useCurrentUserCtx -- if the name of the hook clashes with another hook
export const useCurrentUser = (): CurrentUserContextValues => React.useContext(CurrentUserContext);

const CurrentUserProvider: React.FC<CurrentUserProviderProps> = ({ children, id }) => {
  const [user, setUser] = useState<User>();

  React.useEffect(() => {
    UsersService.findById(id).then(setUser);
  }, [id]);

  return <MyContext.Provider value={{ user }}>{children}</MyContext.Provider>;
};

export default CurrentUserProvider;
```

### _Regular Hook (arrow function)_

```tsx
import React from 'react';

type UseSomethingHook = () => void;

const useSomething: UseSomethingHook = () => {};

export default useSomething;
```

### _Regular Hook (regular function)_

```tsx
import React from 'react';

function useSomething(): void;

function useSomething() {}

export default useSomething;
```

### _Regular Hook (with options and return type)_

```tsx
import React from 'react';

interface UseSomethingOptions {}
interface UseSomethingPayload {}

type UseSomethingHook = (options: UseSomethingOptions) => UseSomethingPayload;

const useSomething: UseSomethingHook = () => {};

export default useSomething;
```

### _Regular Hook (with generic options)_

```tsx
import React from 'react';

interface UseSomethingOptions<C> extends C {}
interface UseSomethingPayload {}

function useSomething<C>(options: UseSomethingOptions<C>): UseSomethingPayload;

function useSomething<C>(options: UseSomethingOptions<C>): UseSomethingPayload {}

export default useSomething;
```

### _Regular Hook (with generic options and payload)_

```tsx
import React from 'react';

interface UseSomethingOptions<C> extends C {}
interface UseSomethingPayload<P> extends P {}

function useSomething<C, P>(options: UseSomethingOptions<C>): UseSomethingPayload<P>;

function useSomething<C, P>(options: UseSomethingOptions<C>): UseSomethingPayload<P> {}

export default useSomething;
```

<br />

# Other

---

- There should be an empty line before `return` statements - makes it more visible
- Use of hooks is strongly encouraged
- Styles should be kept outside of the component, but inside the current folder
- Prefer functional over class components
- Avoid one-line returns
- Avoid unnecessary exports
- If you need to define multiple helper functions/interfaces/constants (let's call them `"helpers"`) that are scoped for a certain component, create a new file
  inside the component directory called `<ComponentName>.helpers.ts` (or `<ComponentName>.helpers.tsx` if you need to render elements) and export
  the helpers from there. That way we'll also enable subcomponents to use those helpers without having to deal with circular dependency
- When using CSS (or SCSS) modules, root element in the component body should have a class called `.container`. Optionally, it can be wrapped with `.root` class for increased selector specificity. This also allows for an easier overview when inspecting elements since the class name is constructed from the file name + class name + hash.

  ```tsx
  import React from 'react';

  import styles from './my_component.module.scss';

  const MyComponent: React.FC = () => (
    <div className={styles.container}>
      <button className={styles.button}>Click me</button>
    </div>
  );

  // When inspecting element
  <div class="my_component_container__h87f3">
    <button class="my_component_button__390f2f">Click me</button>
  </div>;
  ```

- When defining colors, we should follow the Material Color System naming convention.
  Alternative colors (colors that are not defined as primary, secondary, error, success, etc.) should be named in the following way:

  `[color]-[weight]` -> where the color represents the color name (red, green, purple, etc.) and and weight represents a number between 100 and 900 (with a step of 100; or in case there are really similar colors, a step of 50), with 100 being the lightest variant and 900 being the darkest variant.

  > https://material.io/design/color/the-color-system.html

- Required props should be listed before optional ones

- Events should start with the `on` prefix; event handlers should start with the `handle` prefix; both prefixes can be omitted if the name of the function clearly indicates what it does. Make sure the names of the events and handlers are easy to read and that the word flow is natural. General naming structure can be described like this:

  > **Events**: `on<subject?><action>` where `subject` is optional because sometimes it can be implied what the event refers to.
  > <br>
  > Examples: `onClick`, `onArrowClick`, `toggleLoading`

  > **Event handlers**: `handle<subject?><action>` where `subject` is optional because sometimes it can be implied what the handler refers to.
  > <br>
  > Examples: `handleClick`, `handleTableRowClick`, `submitForm`, `closeModal`

  <br>

  ```tsx
  import React from 'react';

  interface ComponentProps {
    // Event
    onClick(id: string): void;
  }

  const Component: React.FC<ComponentProps> = ({ onClick }) => {
    // Event handler
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const {
        currentTarget: { id },
      } = e;

      onClick(id);
    };

    return (
      <button onClick={handleClick} id="some-id">
        Click me
      </button>
    );
  };
  ```

  ```tsx
  import React from 'react';

  interface ModalProps {
    // Event
    onClose(): void;
  }

  const Modal: React.FC<ModalProps> = ({ onClose }) => {
    // Event handler
    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
      // do some side effects
      onClose();
    };

    return (
      <div>
        <div>
          <h3>Modal title</h3>
          {/* If we don't need to to any side effects we can pass in `onClose` directly to `onClick` */}
          <button onClick={handleClose}>X</button>
        </div>
        <div>Modal content</div>
      </div>
    );
  };
  ```

  ```tsx
  import React from 'react';

  const Counter: React.FC<CounterProps> = () => {
    const [count, setCount] = useState<number>(0);

    const decrementCount = () => {
      setCount(prev => prev - 1);
    };

    const incrementCount = () => {
      setCount(prev => prev - 1);
    };

    // Or if we want to have a single handler for decrementing/incrementing
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const {
        currentTarget: { value },
      } = e;

      setCount(prev => (action === 'decrement' ? prev - 1 : prev + 1));
    };

    return (
      <div>
        <button
          onClick={decrementCount}
          // onClick={handleClick}
          // value="decrement"
        >
          -
        </button>
        <div>{count}</div>
        <button
          onClick={incrementCount}
          // onClick={handleClick}
          // value="increment"
        >
          +
        </button>
      </div>
    );
  };
  ```

- _Add your recommendation here_...
