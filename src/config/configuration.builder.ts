/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Environment } from './environment';
import { Configuration } from './configuration';
import appSettings from './appsettings/appsettings.json';

class ConfigurationBuilder {
  private static configuration: Configuration;

  /**
   * This methods ensures there is only one instance of configuration object
   */
  public static getConfiguration(): Configuration {
    if (!this.configuration) {
      this.configuration = this.buildConfiguration();
    }
    return this.configuration;
  }

  /**
   * Builds new instance of configuration from environment variables,
   * appsettings.json file and appsettings.{environment}.json file
   * where environment is value of REACT_APP_ENVIRONMENT environment variable
   */
  private static buildConfiguration(): Configuration {
    const environment = process.env.REACT_APP_ENVIRONMENT as Environment;

    const appSettingsEnvironmentFileName = this.getAppSettingsFileName(environment);

    const appSettingsEnvironment = require(`./appsettings/${appSettingsEnvironmentFileName}`);

    return new Configuration(appSettings, appSettingsEnvironment, Environment.Local);
  }

  private static getAppSettingsFileName(environment: Environment): string {
    switch (environment) {
      case Environment.Local:
      case Environment.Development:
      case Environment.Production:
        return `appsettings.${environment}.json`;
      default:
        throw new Error('Undefined Environment!');
    }
  }
}

export { ConfigurationBuilder };
