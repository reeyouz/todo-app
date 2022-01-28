import { databaseService } from "./config";

beforeAll(() => {
  databaseService.connect();
});

afterAll(async () => {
  databaseService.disconnect();
});
