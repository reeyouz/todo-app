import supertest, { SuperTest, Test } from "supertest";
import { getApp, cleanUp } from "./config";

describe("/api/todo PUT", () => {
  let app: SuperTest<Test>;
  const url = "/api/todo";

  beforeAll(async () => {
    app = supertest((await getApp()).expressApp);
  });

  it("CASE 1: Valid Fields", async () => {
    const res = await app.put(url).send({ title: "Test", dueDate: new Date() });
    expect(res.status).toBe(200);
  });

  // Todo
  // it("CASE 2: Invalid fields", async () => {});

  afterEach(async () => {
    await cleanUp();
  });
});
