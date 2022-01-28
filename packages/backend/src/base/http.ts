import { Response } from "express";
import { HTTP_STATUS_CODE } from "../constants";

export abstract class BaseHttp {
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

  private json<T>(res: Response, statusCode: number, data?: T) {
    return res.status(statusCode).json(data);
  }
}
