import "./script";
import { bootstrap } from "./bootstrap";
import { DatabaseService, configService, loggerService } from "./shared";

(async () => {
  const databaseService = new DatabaseService(loggerService, configService);
  const result = await databaseService.connect();
  if (result.isRight()) {
    loggerService.logger.error("Could not connect to the database! Exiting...");
    process.exit(0);
  }
  const databaseName = "mega-project";

  const app = bootstrap(databaseService, databaseName);

  app.listen();
})();
