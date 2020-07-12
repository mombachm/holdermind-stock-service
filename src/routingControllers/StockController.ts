import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import { StockService } from "../services/StockService";

export enum StockControllerRoute {
  GetStockMainInfo = "/getStockMainInfo",
  GetStocksInfo = "/getStocksInfo",
  SearchStocks = "/searchStocks"
}

export enum StockControllerParameter {
  StockCode = "stockCode",
  StocksCode = "stocksCode",
  SearchText = "searchText"
}

export class StockController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get(StockControllerRoute.GetStocksInfo, this.getStocksInfo.bind(this));
    this.router.get(StockControllerRoute.GetStockMainInfo, this.getStockMainInfo.bind(this));
    this.router.get(StockControllerRoute.SearchStocks, this.searchStocks.bind(this));
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

  public async searchStocks(req: express.Request, res: express.Response): Promise<void> {
    const searchText = this.extractValidParameter(req, res, StockControllerParameter.SearchText);
    const searchResult = await StockService.searchStocks(searchText);
    res.json(searchResult);
  }
}
