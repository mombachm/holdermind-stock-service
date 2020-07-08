import { YahooFinanceService } from "./thirdPartyServices/YahooFinanceService";

export class StockService {
  public static async getStockinfo(stockCode: string): Promise<any> {
    const response = await YahooFinanceService.getStockinfo(stockCode);
    return response;
  }
}
