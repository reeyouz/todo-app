import { ObjectId } from "mongodb";
import supertest, { SuperTest, Test } from "supertest";
import { TodoModel } from "../use-cases";
import { getApp, cleanUp } from "./config";

describe("/api/todo DELETE", () => {
  let app: SuperTest<Test>;
  const url = "/api/todo";
  let _id = new ObjectId();
  const todo = new TodoModel({
    _id,
    title: "Delete Test",
    dueDate: new Date("2022"),
  });

  beforeAll(async () => {
    app = supertest((await getApp()).expressApp);
  });

  beforeEach(async () => {
    await app.put(url).send(todo);
  });

  it("CASE 1: Correctly deleted", async () => {
    const res = await app.delete(`${url}/${_id.toString()}`);
    expect(res.status).toBe(200);
  });

  it("CASE 2: Not found!", async () => {
    const res = await app.delete(`${url}/non-existing-object-id`);
    expect(res.status).toBe(404); // Todo: message = NOT FOUND
  });

  afterEach(async () => {
    await cleanUp();
  });
});
