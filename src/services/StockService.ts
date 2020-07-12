import { YahooFinanceService } from "./thirdPartyServices/YahooFinanceService";
import { YahooFinanceSubmoduleParameter } from "./thirdPartyServices/YahooFinanceParameters";

export class StockService {
  public static async getStocksInfo(
    stocksCode: string | string[]
  ): Promise<any | null> {
    const response = await YahooFinanceService.getStocksInfo(stocksCode);
    return response;
  }

  public static async getStockMainInfo(stockCode: string): Promise<any | null> {
    const responseMainInfo = await YahooFinanceService.getStockInfoV10(
      stockCode,
      [
        YahooFinanceSubmoduleParameter.FinancialData,
        YahooFinanceSubmoduleParameter.SummaryDetail,
      ]
    );
    const responseMarketInfo = await this.getStocksInfo(stockCode);
    if (
      responseMainInfo &&
      responseMarketInfo &&
      responseMainInfo.length &&
      responseMainInfo[0].summaryDetail &&
      responseMarketInfo.length
    ) {
      return {
        ...responseMainInfo[0].summaryDetail,
        ...responseMainInfo[0].financialData,
        ...responseMarketInfo[0],
      };
    }
    return null;
  }

  public static async searchStocks(
    searchText: string
  ): Promise<any | null> {
    const response = await YahooFinanceService.searchStocks(searchText);
    return response;
  }
}
