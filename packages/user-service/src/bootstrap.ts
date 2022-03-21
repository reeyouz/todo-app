import { Application } from "./app";
import { Controller } from "./base";
import {
  HealthCheckController,
  HealthCheckService,
  User,
  UserController,
  UserRepository,
  UserService,
} from "./features";
import {
  DatabaseService,
  configService,
  loggerService,
  middlewareService,
} from "./shared";

export function bootstrap(
  databaseService: DatabaseService,
  databaseName = "mega-project"
) {
  let controllers: Controller[] = [];

  // Health Check
  const healhCheckService = new HealthCheckService(loggerService);
  controllers.push(new HealthCheckController(healhCheckService, loggerService));

  // Users
  const userResult = databaseService.getCollection<User>(databaseName, "users");
  if (userResult.isLeft()) {
    const userRepository = new UserRepository(loggerService, userResult.value);
    const userService = new UserService(
      loggerService,
      userRepository,
      configService
    );
    controllers.push(
      new UserController(userService, middlewareService, loggerService)
    );
  }

  const app = new Application(configService, loggerService, controllers);

  return app;
}
