import { Collection, Filter, FindOptions, ObjectId } from "mongodb";
import { BaseRepository } from "../base";
import { TodoModel } from "./todo.model";

export class TodoRepository extends BaseRepository<TodoModel> {
  constructor(collection: Collection<TodoModel>) {
    super(collection);
  }

  async put(data: TodoModel): Promise<void> {
    await this.collection.updateOne(
      { _id: data._id },
      { $set: data },
      { upsert: true }
    );
  }

  async findOne(_id: ObjectId): Promise<TodoModel | null> {
    return this.collection.findOne({ _id });
  }

  // TODO: Pagination
  async findMany(
    query: Filter<TodoModel>,
    options?: FindOptions
  ): Promise<TodoModel[]> {
    return this.collection.find(query, options).toArray();
  }

  async delete(_id: ObjectId): Promise<void> {
    await this.collection.deleteOne({ _id });
  }
}
