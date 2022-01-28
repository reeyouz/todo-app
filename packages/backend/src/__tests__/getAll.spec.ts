import supertest, { SuperTest, Test } from "supertest";
import { cleanUp, getApp, populate } from "./config";
import sample from "./sample";

describe("/api/todo GET", () => {
  let app: SuperTest<Test>;
  const url = "/api/todo";

  beforeAll(async () => {
    app = supertest((await getApp()).expressApp);
    await populate();
  });

  it("CASE 1: ", async () => {
    const res = await app.get(url);
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(sample.length);
  });

  afterAll(async () => {
    await cleanUp();
  });
});
