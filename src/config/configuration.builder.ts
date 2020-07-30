import { Environment } from './environment';
import { Configuration } from './configuration';

import appSettings from './Settings/settings.json';

class ConfigurationBuilder {
  private static configuration: Configuration;

  /**
   * This methods ensures there is only one instance of configuration object
   */
  public static getConfiguration(): Configuration {
    if (!this.configuration) {
      this.buildConfiguration();
    }

    return this.configuration;
  }

  /**
   * Builds new instance of configuration from environment variables,
   * appsettings.json file and appsettings.{environment}.json file
   * where environment is value of REACT_APP_ENVIRONMENT environment variable
   */
  public static buildConfiguration(): void {
    const environment = process.env.REACT_APP_ENVIRONMENT as Environment;
    const appSettingsEnvironmentFileName = this.getAppSettingsFileName(environment);
    const appSettingsEnvironment = require(`./Settings/${appSettingsEnvironmentFileName}`);
    const config = new Configuration(appSettings, appSettingsEnvironment, environment);

    this.configuration = config;
  }

  private static getAppSettingsFileName(environment: Environment): string {
    if (Object.values(Environment).includes(environment)) {
      return `settings.${environment}.json`;
    }

    throw new Error('Undefined Environment!');
  }
}

export { ConfigurationBuilder };
