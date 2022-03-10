import { Service } from "@base/service";

export class HealthCheckService extends Service {
  constructor() {
    super();
  }

  getMessage() {
    return { message: "Health Check is Working!" };
  }
}
