import baseConfig from './env.json';

export enum Environment {
  LOCAL = 'local',
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  TEST = 'test',
}

export class EnvironmentConfig {
  private static environment: Environment;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static config: Record<string, any>;

  public static buildConfig() {
    if (this.config) {
      return this.config;
    }

    const environment = process.env.REACT_APP_ENVIRONMENT as Environment;
    const appConfigEnvironmentFileName = this.getAppConfigFileName(environment);
    const environmentConfig = require(`./${appConfigEnvironmentFileName}`);

    this.environment = environment;
    this.config = {
      ...baseConfig,
      ...environmentConfig,
    };

    Object.keys(this.config).forEach(key => {
      Object.defineProperty(this, key, {
        value: environmentConfig[key] ?? baseConfig[key as keyof typeof baseConfig],
      });
    });

    return this.config;
  }

  private static getAppConfigFileName(environment: Environment): string {
    if (Object.values(Environment).includes(environment)) {
      return `env.${environment}.json`;
    }

    throw new Error('Undefined Environment!');
  }

  public static getEnvironment(): Environment {
    return this.environment;
  }

  public static getConfig<T = Record<string, unknown>>(): T {
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
