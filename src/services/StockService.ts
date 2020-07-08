import { YahooFinanceService } from "./thirdPartyServices/YahooFinanceService";

export class StockService {
  public static async getStocksInfo(stocksCode: string[]): Promise<any> {
    const response = await YahooFinanceService.getStocksInfo(stocksCode);
    return response;
  }
}
