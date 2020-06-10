# Style Guide

---

As a "base" style guide, we'll be using the Airbnb's style guide([website](https://airbnb.io/javascript/react) or [GitHub](https://github.com/airbnb/javascript)). Since we're applying different eslint configs that are combined with Airbnb's [config](https://yarnpkg.com/package/eslint-config-airbnb), large number of these rules are already enforced.

Additional rules that can be applied to have an universal style of coding across apps:

---

## Import statements

---

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

  > Prefer default imports when available. E.g. `import isEmpty from 'lodash/isEmpty` instead of `import { isEmpty } from 'lodash'`. Results in a smaller bundle size.

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

---

## Project structure

---

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
  └─────── index.ts
  ```

### _src/containers_

- Container components (`src/containers/*`) extend the component structure from `src/components`
  > Example without folder structure: https://github.com/profico/react-boilerplate-typescript/tree/master/src/containers/index.ts

### _src/routers_

- This folder can be a simple list of router components. Extending the `src/components/*` structure is not required.
  > Example without folder structure: https://github.com/profico/react-boilerplate-typescript/tree/master/src/routers/index.ts

### _src/utils_

- Usually, here we store utility classes, Context, helper functions and hooks that are used all across the app.
- Outline structure should look something like:
  ```
  utils
  └── shared.ts
  └── Context (extends "src/components" structure)
  └───── e.g. AuthContext
  └── hooks (can extend "src/components" structure, but not required)
  └───── e.g. useTryCatch (all hooks must start with "use" prefix)
  └── HOC (can extend "src/components" structure, but not required)
  └───── e.g. withTracker (all HOCs must start with "with" prefix)
  └── static (can extend "src/components" structure, but not required)
  └───── e.g. String (string helpers)
  └── shared.ts
  ```

### _src/views_

- View components (`src/views/*`) extend the component structure from `src/components` with an addition of `partials` directory in which all the components that belong to that view are stored.
  - Components inside `partials` directory cannot have their own `"partials"` directory!
    > Example: https://github.com/profico/react-boilerplate-typescript/tree/master/src/views/Home

---

## Misc

---

- There should be an empty line before `return` statements - makes it more visible
- Use of hooks is strongly encouraged
- Styles should be kept outside of the component, but inside the parent folder.
- Prefer functional over class components
- _Add your recommendation here_...
