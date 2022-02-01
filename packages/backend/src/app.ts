import express, {
  NextFunction,
  Request,
  Response,
  Application as ExpressApplication,
} from "express";
import { BaseController } from "./base";
import { ConfigService, LoggerService } from "./shared";

export class Application {
  private app = express();

  public get expressApp(): ExpressApplication | null {
    return this.configService.isTest ? this.app : null;
  }

  constructor(
    public loggerService: LoggerService,
    public configService: ConfigService,
    controllers: BaseController[]
  ) {
    this.configureMiddlewares();
    this.configureRouters(controllers);
    this.configureErrorHandler();
  }

  private configureMiddlewares() {
    this.app.use(express.json({}));
    this.app.use(express.urlencoded({}));
    this.app.use(this.requestLogger.bind(this));
  }

  private configureRouters(controllers: BaseController[]) {
    let controller: BaseController;
    for (let i = 0; i < controllers.length; i++) {
      controller = controllers[i];
      this.app.use("/", controller.router);
    }
  }

  private requestLogger(req: Request, res: Response, next: NextFunction) {
    this.loggerService.logger.info({ method: req.method, url: req.url });
    next();
  }

  private configureErrorHandler() {
    // throw new Error("Method not implemented.");
  }

  public listen() {
    this.app.listen(this.configService.PORT, () => {
      this.loggerService.logger.info(
        `App is running on PORT ${this.configService.PORT}`
      );
    });
  }
}
