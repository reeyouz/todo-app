import { Application } from "./app";
import { ConfigService, DatabaseService, LoggerService } from "./shared";
import { TodoController, TodoService, TodoRepository } from "./use-cases";

async function bootstrap() {
  const configService = new ConfigService();

  if (!configService.isProd) {
    require("dotenv").config();
  }

  const loggerService = new LoggerService(configService);
  const databaseService = new DatabaseService(configService);

  const todoRepository = new TodoRepository(
    await databaseService.getCollection("mega-project", "todos")
  );
  const todoService = new TodoService(todoRepository);
  const todoController = new TodoController(todoService, loggerService);

  const app = new Application(loggerService, configService, [todoController]);
  app.listen();
}

bootstrap();
