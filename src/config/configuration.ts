import { Environment } from './environment';

class Configuration {
  public readonly environment: Environment;

  public readonly settings: Record<string, unknown>;

  /**
   * Initializes new instance of configuration objects
   * and sets its properties with priority in order from environment variables,
   * settings.{environment}.json file or settings.json file
   */
  constructor(
    appSettings: Record<string, unknown>,
    appSettingsEnvironment: Record<string, unknown>,
    environment: Environment
  ) {
    this.environment = environment;
    this.settings = {
      ...appSettings,
      ...appSettingsEnvironment,
    };

    // if (Object.keys(this.settings).length === 0) {
    //   Configuration.throwErrorExpression('Missing configuration.');
    // }

    Object.keys(this.settings).forEach((key) => {
      Object.defineProperty(this, key, {
        value: appSettingsEnvironment[key] ?? appSettings[key],
      });
    });
  }

  /**
   * throw new Error is not expression and cannot be used in combination with ?? operator
   * @param message exception message
   */
  private static throwErrorExpression(message: string) {
    throw new Error(message);
  }

  public getProperty(property: string): unknown {
    if (!Object.prototype.hasOwnProperty.call(this.settings, property)) {
      Configuration.throwErrorExpression('Missing key.');
    }

    return this.settings[property];
  }
}
export { Configuration };
