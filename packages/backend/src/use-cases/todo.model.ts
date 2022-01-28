import { ObjectId } from "mongodb";
import { IsNotEmpty, IsDate, IsBoolean, IsMongoId } from "class-validator";
import { BaseModel } from "../base/model";

export class TodoModel extends BaseModel<ObjectId> {
  @IsNotEmpty()
  title: string;

  @IsDate()
  dueDate: Date;

  description?: string;

  @IsBoolean()
  isComplete?: boolean;

  @IsDate()
  createdOn?: Date;

  @IsMongoId()
  _id: ObjectId;

  constructor(data: any) {
    super();
    this.title = data.title;
    this.dueDate = data.dueDate;
    this.description = data.description ?? "";
    this.isComplete = data.isComplete ?? false;
    this.createdOn = data.createdOn ?? new Date();
    this._id = data._id ?? new ObjectId();
  }
}
