/* eslint-disable @typescript-eslint/no-explicit-any */

interface Config {
  APP_ENV: string | undefined;
  NODE_ENV: string;
  settings: Record<string, any>;
}

/**
 * This class is a helper class for easier handling of environment variables.
 * 
 * @example
 * ```
    // Get the current config -> e.g. `{ appName: "@profico/react-boilerplate" }`
    EnvironmentConfig.getConfig();

    // Get the current environment
    EnvironmentConfig.getEnvironment();
 * ```
 */
export class EnvironmentConfig {
  private static config: Config;

  private static buildConfig(): Config {
    const APP_ENV = process.env.REACT_APP_ENV;
    // eslint-disable-next-line prefer-destructuring
    const NODE_ENV = process.env.NODE_ENV;
    const settings: Record<string, any> = {};

    Object.keys(process.env).forEach(key => {
      if (key === 'REACT_APP_ENV') {
        settings.APP_ENV = process.env[key];
      } else if (key.includes('REACT_APP_')) {
        settings[key.replace('REACT_APP_', '')] = process.env[key];
      } else {
        settings[key] = process.env[key];
      }
    });

    this.config = {
      NODE_ENV,
      settings,
      APP_ENV: APP_ENV || NODE_ENV,
    };

    return this.config;
  }

  public static getConfig(): Config {
    const config = this.config || this.buildConfig();

    return config;
  }

  public static getAppEnvironment(): string | undefined {
    return this.getConfig().APP_ENV;
  }

  public static getNodeEnvironment(): string | undefined {
    return this.getConfig().NODE_ENV;
  }
}
