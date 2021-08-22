/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * This class enables any number of environment configs in `json` format.
 * Reason being is that CRA only provides `development` and `production` environments.
 * 
 * Configuration files have to be inside the `src` folder since CRA limits imports outside of `src` folder.
 * The only solution would be to eject from the CRA structure with `yarn eject`.
 * 
 * @example
 * ```
    // First step is building the config, usually in `App.tsx`.
    EnvironmentConfig.buildConfig();

    // Get the current config -> e.g. `{ appName: "@profico/react-boilerplate" }`
    EnvironmentConfig.getConfig();

    // Get the current environment
    EnvironmentConfig.getEnvironment();

    // Get a value by key or `undefined` if the key is not found
    EnvironmentConfig.getValue('appName');

    // Support for nested keys -> e.g. `{ app: { name: "@profico/react-boilerplate" } }`
    EnvironmentConfig.getValue('app.name');
 * ```
 */
export class EnvironmentConfig {
  private static environment: string;

  private static config: Record<string, any>;

  public static buildConfig() {
    if (this.config) {
      return this.config;
    }

    const environment = process.env.REACT_APP_ENVIRONMENT;

    if (!environment) {
      throw new Error('Undefined environment!');
    }

    const appConfigEnvironmentFileName = `env.${environment}.json`;
    const baseConfigFileName = 'env.json';

    let baseConfig: Record<string, any>;
    let environmentConfig: Record<string, any>;

    try {
      baseConfig = require(`../../${baseConfigFileName}`);
    } catch {
      baseConfig = {};
    }

    try {
      environmentConfig = require(`../../${appConfigEnvironmentFileName}`);
    } catch {
      environmentConfig = {};
    }

    this.environment = environment;
    this.config = {
      ...baseConfig,
      ...environmentConfig,
    };

    return this.config;
  }

  public static getEnvironment<T extends string = string>(): T {
    return this.environment as T;
  }

  public static getConfig<T = Record<string, any>>(): T {
    if (!this.config) {
      return {} as T;
    }

    return this.config as T;
  }

  public static getValue<T>(key: string): T | undefined {
    try {
      const keys = key.split('.');
      const { config } = this;
      let result = config[keys[0] as keyof typeof config];

      for (let index = 1; index < keys.length; index += 1) {
        const propertyName = keys[index];

        result = result[propertyName];
      }

      return result as T;
    } catch {
      return undefined;
    }
  }
}
