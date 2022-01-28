import { ObjectId } from "mongodb";
import supertest, { SuperTest, Test } from "supertest";
import { TodoModel } from "../use-cases";
import { cleanUp, getApp, populate } from "./config";

describe("/api/todo GET by id", () => {
  let app: SuperTest<Test>;
  let url = "/api/todo";
  let _id = new ObjectId();
  const todo = new TodoModel({
    _id,
    title: "Get Test",
    dueDate: new Date("2022"),
  });

  beforeAll(async () => {
    app = supertest((await getApp()).expressApp);
    await populate([todo]);
  });

  it("CASE 1: Exists", async () => {
    const res = await app.get(`${url}/${_id.toString()}`);
    expect(res.status).toBe(200);
    expect(res.body.title).toBe(todo.title);
  });

  it("CASE 2: Doesn't exist", async () => {
    const res = await app.get(`${url}/non-existing-id`);
    expect(res.status).toBe(404);
  });

  afterAll(async () => {
    await cleanUp();
  });
});
