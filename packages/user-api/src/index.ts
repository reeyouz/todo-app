import "./script";
import { bootstrap } from "./bootstrap";
import { ConfigService, DatabaseService, LoggerService } from "./shared";

declare const loggerService: LoggerService;
declare const configService: ConfigService;

(async () => {
  const databaseService = new DatabaseService(loggerService, configService);
  const result = await databaseService.connect();
  if (result.isRight()) {
    loggerService.logger.error("Could not connect to the database! Exiting...");
    process.exit(0);
  }

  const app = bootstrap(databaseService);

  app.listen();
})();
