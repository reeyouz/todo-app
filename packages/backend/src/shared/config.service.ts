import { BaseService } from "../base";
import { ENV } from "../constants";
import { EnvironmentType } from "../types";

export class ConfigService extends BaseService {
  private environment: EnvironmentType;

  public get currentEnvironment() {
    return this.environment;
  }

  public get isTest() {
    return this.environment === ENV.TESTING;
  }

  public get isProd() {
    return this.environment === ENV.PRODUCTION;
  }

  public get PORT() {
    const APP_PORT = Number(process.env.APP_PORT);
    return isNaN(APP_PORT) ? 3000 : APP_PORT;
  }

  public get MONGO_URL(): string {
    return process.env.MONGO_DB_URI!;
  }

  constructor() {
    super();
    this.environment = this.getEnvironment();
  }

  public getEnvironment(): EnvironmentType {
    let NODE_ENV = process.env.NODE_ENV;
    if (
      !NODE_ENV ||
      ![ENV.DEVELOPMENT, ENV.PRODUCTION, ENV.TESTING].includes(NODE_ENV)
    ) {
      NODE_ENV = ENV.LOCAL;
    }

    return NODE_ENV as EnvironmentType;
  }
}
