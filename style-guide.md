# Style Guide

As a "base" style guide, we'll be using the Airbnb's style guide ([website](https://airbnb.io/javascript/react) or [GitHub](https://github.com/airbnb/javascript)). Since we're applying different eslint configs that are combined with Airbnb's [config](https://yarnpkg.com/package/eslint-config-airbnb), large number of these rules are already enforced.

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

  > Ordering will have to be done manually until we have our own eslint plugin that will take care of this.

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

## Project structure

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

## Component structure

### _Functional component (arrow function)_

```typescript
import React from 'react';

interface MyComponentProps {}
type MyComponentProps = {};

const MyComponent: React.FC<MyComponentProps> = props => {};

export default MyComponent;
```

### _Functional component (regular function)_

```typescript
import React from 'react';

interface MyComponentProps {}
type MyComponentProps = {};

function MyComponent(props: MyComponentProps) {}

export default MyComponent;
```

### _Functional component with generic props_

```typescript
import React from 'react';

interface MyComponentProps<T> extends T {}
type MyComponentProps<T> = T & {};

function MyComponent<T>(props: MyComponentProps<T>) {}

export default MyComponent;
```

### _Regular Hook (arrow function)_

```typescript
import React from 'react';

type UseSomethingHook = () => void;

const useSomething: UseSomethingHook = () => {};

export default useSomething;
```

### _Regular Hook (regular function)_

```typescript
import React from 'react';

function useSomething(): void;

function useSomething() {}

export default useSomething;
```

### _Regular Hook (with options and return type)_

```typescript
import React from 'react';

interface UseSomethingOptions {}
interface UseSomethingPayload {}

type UseSomethingHook = (options: UseSomethingOptions) => UseSomethingPayload;

const useSomething: UseSomethingHook = () => {};

export default useSomething;
```

### _Regular Hook (with generic options)_

```typescript
import React from 'react';

interface UseSomethingOptions<C> extends C {}
interface UseSomethingPayload {}

function useSomething<C>(options: UseSomethingOptions<C>): UseSomethingPayload;

function useSomething<C>(options: UseSomethingOptions<C>): UseSomethingPayload {}

export default useSomething;
```

### _Regular Hook (with generic options and payload)_

```typescript
import React from 'react';

interface UseSomethingOptions<C> extends C {}
interface UseSomethingPayload<P> extends P {}

function useSomething<C, P>(options: UseSomethingOptions<C>): UseSomethingPayload<P>;

function useSomething<C, P>(options: UseSomethingOptions<C>): UseSomethingPayload<P> {}

export default useSomething;
```

<br />

## Other

---

- There should be an empty line before `return` statements - makes it more visible
- Use of hooks is strongly encouraged
- Styles should be kept outside of the component, but inside the current folder
- Prefer functional over class components
- Avoid one-line returns
- Avoid unnecessary exports
- _Add your recommendation here_...
