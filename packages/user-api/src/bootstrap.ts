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
import { ConfigService, DatabaseService, LoggerService } from "./shared";

declare const loggerService: LoggerService;
declare const configService: ConfigService;

export function bootstrap(databaseService: DatabaseService) {
  let controllers: Controller[] = [];

  // Health Check
  const healhCheckService = new HealthCheckService();
  controllers.push(new HealthCheckController(healhCheckService, loggerService));

  // User
  const result = databaseService.getCollection<User>("mega-project", "users");
  if (result.isLeft()) {
    const userRepository = new UserRepository(loggerService, result.value);
    const userService = new UserService(loggerService, userRepository);
    controllers.push(new UserController(userService, loggerService));
  }

  const app = new Application(configService, loggerService, controllers);

  return app;
}
