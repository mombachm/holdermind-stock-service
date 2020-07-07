import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";

export class StockController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get("/getStockInfo", this.getStockInfo);
  }

  public async getStockInfo(req: express.Request, res: express.Response): Promise<void> {
    res.json({
      cod: "ITSA4",
      value: "10.02"
    });
  }
}
