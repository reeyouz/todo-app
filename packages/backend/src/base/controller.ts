import { NextFunction, Request, Response, Router } from "express";
import { HTTP_STATUS_CODE } from "../constants";
import { LoggerService } from "../shared";

export abstract class BaseController {
  public router = Router();

  constructor(public loggerService: LoggerService, path: string) {
    this.router.put(path, this.put.bind(this)); // TODO: Middleware?
    this.router.delete(`${path}/:id`, this.delete.bind(this));
    this.router.get(path, this.findMany.bind(this));
    this.router.get(`${path}/:id`, this.findOne.bind(this));
  }

  abstract put(req: Request, res: Response, next: NextFunction): Promise<void>;

  abstract findOne(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;

  abstract findMany(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;

  abstract delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;

  // RESPONSE
  public ok<T>(res: Response, data?: T) {
    return this.json(res, HTTP_STATUS_CODE.OK, data);
  }

  public created(res: Response) {
    return res.status(HTTP_STATUS_CODE.CREATED).send();
  }

  public bad_request<T>(res: Response, data?: T) {
    return this.json(res, HTTP_STATUS_CODE.BAD_REQUEST, data);
  }

  public internal_server<T>(res: Response, data?: T) {
    return this.json(res, HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, data);
  }

  public service_unavailable<T>(res: Response, data?: T) {
    return this.json(res, HTTP_STATUS_CODE.SERVICE_UNAVAILABLE, data);
  }

  public not_found<T>(res: Response, data?: T) {
    return this.json(res, HTTP_STATUS_CODE.NOT_FOUND, data);
  }

  private json<T>(res: Response, statusCode: number, data?: T) {
    return res.status(statusCode).json(data);
  }
}
