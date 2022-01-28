import { NextFunction, Request, Response } from "express";
import { BaseController } from "../base";
import { LoggerService } from "../shared";
import { TodoService } from "./todo.service";

export class TodoController extends BaseController {
  constructor(private todoService: TodoService, loggerService: LoggerService) {
    super(loggerService, "/api/todo");
  }

  async put(req: Request, res: Response, next: NextFunction) {
    try {
      await this.todoService.put(req.body);
      this.ok(res);
    } catch (error: any) {
      this.loggerService.logger.error(error.message);
      this.internal_server(res);
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.todoService.findOne(req.params.id);
      this.ok(res, result);
    } catch (error) {
      this.not_found(res);
    }
  }

  async findMany(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.todoService.findMany(
        req.query.query as string,
        req.query.options as string
      );
      this.ok(res, result);
    } catch (error) {
      this.internal_server(res, error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await this.todoService.delete(req.params.id);
      this.ok(res);
    } catch (error) {
      this.not_found(res);
    }
  }
}
