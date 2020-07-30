import { Environment } from './environment';

class Configuration {
  public readonly environment: Environment;
  public readonly serverUrl: string;

  /**
   * Initializes new instance of configuration objects
   * and sets its properties with priority in order from environment variables,
   * appsettings.{environment}.json file or appsettings.json file
   */
  constructor(appSettings: any, appSettingsEnvironment: any, environment: Environment) {
    this.environment = environment;

    this.serverUrl =
      process.env.REACT_APP_SERVER_URL ??
      appSettingsEnvironment.serverUrl ??
      appSettings.serverUrl ??
      this.throwErrorExpression('Empty serverUrl');
  }

  /**
   * throw new Error is not expression and cannot be used in combination with ?? operator
   * @param message exception message
   */
  private throwErrorExpression(message: string) {
    throw new Error(message);
  }
}
export { Configuration };
