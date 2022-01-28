import winston, { Logger, createLogger } from "winston";
import { BaseService } from "../base";
import { ConfigService } from "./config.service";

export class LoggerService extends BaseService {
  public logger: Logger;

  private get logLevel() {
    return this.configService.isProd ? "info" : "debug";
  }

  constructor(private configService: ConfigService) {
    super();
    this.logger = createLogger({
      level: this.logLevel,
      format: winston.format.json(),
    });
    if (!this.configService.isProd) {
      this.logger.add(new winston.transports.Console());
    }
  }
}
