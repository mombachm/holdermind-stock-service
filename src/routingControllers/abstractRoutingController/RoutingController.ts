import * as express from "express";

export abstract class RoutingController {
  public router: express.Router = express.Router();

  constructor() {
    this.assembleRoutes();
  }

  public getRouter(): express.Router {
    return this.router;
  }

  protected extractValidParameter(req: express.Request, res: express.Response, parameter: string): string {
    try {
      const parameterValue = req.query[parameter].toString();
      return parameterValue;
    } catch (error) {
      res.json(`Invalid parameter: ${parameter}`);
    }
  }

  protected abstract assembleRoutes(): void;
}
