import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import { StockService } from "../services/StockService";

export enum StockControllerRoute {
  GetStocksInfo = "/getStocksInfo"
}

export enum StockControllerParameter {
  StocksCode = "stocksCode"
}

export class StockController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get(StockControllerRoute.GetStocksInfo, this.getStocksInfo);
  }

  public async getStocksInfo(req: express.Request, res: express.Response): Promise<void> {
    const stocksCode = req.query.stocksCode.toString().split(",");
    const stockInfo = await StockService.getStocksInfo(stocksCode);
    res.json(stockInfo);
  }
}
