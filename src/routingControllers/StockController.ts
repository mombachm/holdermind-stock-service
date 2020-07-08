import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import { StockService } from "../services/StockService";

export class StockController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get("/getStockInfo", this.getStockInfo);
  }

  public async getStockInfo(req: express.Request, res: express.Response): Promise<void> {
    const stockInfo = await StockService.getStockinfo();
    console.log(stockInfo);
    res.json(stockInfo);
  }
}
