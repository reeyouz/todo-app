import { Collection, Filter } from "mongodb";
import { BaseModel } from "./model";

export abstract class BaseRepository<T extends BaseModel> {
  constructor(protected collection: Collection<T>) {}

  abstract put(data: T): Promise<void>;
  abstract findOne(_id: T["_id"]): Promise<T | null>;
  abstract findMany(query: Filter<T>): Promise<T[]>;
  abstract delete(_id: T["_id"]): Promise<void>;
}
