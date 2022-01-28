import { ObjectId } from "mongodb";
import { BaseService } from "../base";
import { parseQuery } from "../utils";
import { TodoModel } from "./todo.model";
import { TodoRepository } from "./todo.repository";

export class TodoService extends BaseService {
  constructor(private todoRepository: TodoRepository) {
    super();
  }

  public async put(data: any) {
    await this.todoRepository.put(new TodoModel(data));
  }

  public async delete(_id: string) {
    await this.todoRepository.delete(new ObjectId(_id));
  }

  public async findMany(query?: string, options?: string) {
    return this.todoRepository.findMany(parseQuery(query), parseQuery(options));
  }

  public async findOne(_id: string) {
    return this.todoRepository.findOne(new ObjectId(_id));
  }
}
