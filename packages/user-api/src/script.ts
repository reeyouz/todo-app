import "reflect-metadata";
import { ConfigService, LoggerService } from "@shared/services";

const configService = new ConfigService();
const loggerService = new LoggerService(configService);

if (!configService.isProd) {
  require("dotenv").config();
}
