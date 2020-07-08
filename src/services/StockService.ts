import { YahooFinanceService } from "./thirdPartyServices/YahooFinanceService";

export class StockService {
  public static async getStockinfo(): Promise<any> {
    const response = await YahooFinanceService.getStockinfo();
    return response;
  }
}
