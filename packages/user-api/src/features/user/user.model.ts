import { IsDateString, IsEmail, IsString, Max, Min } from "class-validator";
import { plainToInstance } from "class-transformer";
import { User as IUser } from "./user.type";

export class User implements IUser {
  @IsString()
  _id: string;

  @Min(3)
  @Max(65)
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @Min(8)
  @Max(20)
  @IsString()
  password: string;

  @IsDateString()
  createdOn: Date;

  static getInstance(data: any): User {
    return plainToInstance(User, data);
  }
}
