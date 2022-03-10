import { Controller } from "@base/controller";
import { LoggerService } from "@shared/services";
import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController extends Controller {
  path: string;

  constructor(
    private userService: UserService,
    loggerService: LoggerService,
    path = "/user"
  ) {
    super(loggerService);
    this.path = path;
    this.router.get(this.path, this.getUserById.bind(this));
    this.router.get(this.path, this.createUser.bind(this));
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    const result = await this.userService.createUser(req.body);
    if (result.isLeft()) {
      return this.http.created();
    }
    next(result.value);
  }

  async getUserById(req: Request, res: Response, next: NextFunction) {}
}
