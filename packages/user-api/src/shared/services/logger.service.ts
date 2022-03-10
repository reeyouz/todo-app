import { Service } from "@base/service";
import { createLogger, format, Logger, transports } from "winston";
import { ConfigService } from ".";

export class LoggerService extends Service {
  logger: Logger;

  constructor(private configService: ConfigService) {
    super();
    this.logger = createLogger({
      level: "debug",
      format: format.json(),
    });

    if (!this.configService.isProd) {
      this.logger.level = "info";
      this.logger.add(new transports.Console());
    }
  }
}
