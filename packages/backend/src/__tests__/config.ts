import { ConfigService, DatabaseService, LoggerService } from "../shared";
import { Application } from "../app";
import { TodoService, TodoController, TodoRepository } from "../use-cases";
import sample from "./sample";

const testDatabaseName = "test-mega-project";
const testCollectionName = "todos";

const configService = new ConfigService();
export const databaseService = new DatabaseService(configService);

const config = {
  doCleanup: true,
};

export async function getApp(
  databaseName = testDatabaseName,
  collectionName = testCollectionName
) {
  const loggerService = new LoggerService(configService);
  const todoRepository = new TodoRepository(
    await databaseService.getCollection(databaseName, collectionName)
  );
  const todoService = new TodoService(todoRepository);
  const todoController = new TodoController(todoService, loggerService);

  return new Application(loggerService, configService, [todoController]);
}

export async function populate(
  data: any[] = [],
  databaseName = testDatabaseName,
  collectionName = testCollectionName
) {
  const client = databaseService.getClient();
  if (client) {
    const result = await client
      .db(databaseName)
      .collection(collectionName)
      .insertMany([...sample, ...data]);
    console.log(
      `Population successful: ${result.acknowledged} | ${result.insertedCount}`
    );
  }
}

export async function cleanUp(databaseName = testDatabaseName) {
  const client = databaseService.getClient();
  if (client && config.doCleanup) {
    await client.db(databaseName).dropDatabase();
  }
}
