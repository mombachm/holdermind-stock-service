import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import { StockService } from "../services/StockService";

export enum StockControllerRoute {
  getStockMainInfo = "/getStockMainInfo",
  GetStocksInfo = "/getStocksInfo"
}

export enum StockControllerParameter {
  StockCode = "stockCode",
  StocksCode = "stocksCode"
}

export class StockController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get(StockControllerRoute.GetStocksInfo, this.getStocksInfo);
    this.router.get(StockControllerRoute.getStockMainInfo, this.getStockMainInfo);
  }

  public async getStocksInfo(req: express.Request, res: express.Response): Promise<void> {
    const stocksCode = req.query.stocksCode.toString().split(",");
    const stockInfo = await StockService.getStocksInfo(stocksCode);
    res.json(stockInfo);
  }

  public async getStockMainInfo(req: express.Request, res: express.Response): Promise<void> {
    const stocksCode = req.query.stockCode.toString();
    const stockInfo = await StockService.getStockMainInfo(stocksCode);
    res.json(stockInfo);
  }
}
