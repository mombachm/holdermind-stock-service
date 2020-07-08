import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import { StockService } from "../services/StockService";

export enum StockControllerRoute {
  GetStockInfo = "/getStockInfo"
}

export enum StockControllerParameter {
  StockCode = "stockCode"
}

export class StockController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get(StockControllerRoute.GetStockInfo, this.getStockInfo);
  }

  public async getStockInfo(req: express.Request, res: express.Response): Promise<void> {
    const stockCode = req.query.stockCode.toString();
    const stockInfo = await StockService.getStockinfo(stockCode);
    res.json(stockInfo);
  }
}
