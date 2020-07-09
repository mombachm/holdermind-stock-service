import Axios from "axios";
import {
  DesiredYahooFinanceQuoteFields,
  YahooFinanceParameters,
  YahooFinanceModules,
  YahooFinanceRoute,
  YahooFinanceServiceURI,
} from "./YahooFinanceParameters";

export class YahooFinanceService {
  public static async getStocksInfo(stocksCode: string | string[]): Promise<any> {
    const response = await Axios.get(
      this.buildUrl(YahooFinanceModules.Finance, YahooFinanceRoute.Quote),
      {
        params: {
          [YahooFinanceParameters.Symbols]: this.buildStockSymbolParameter(stocksCode),
          [YahooFinanceParameters.Fields]: this.buildFieldsParameter(
            DesiredYahooFinanceQuoteFields
          ),
          [YahooFinanceParameters.Language]: "pt-BR",
          [YahooFinanceParameters.Formatted]: false
        },
      }
    );
    if (response.data.quoteResponse.result) {
      return response.data.quoteResponse.result;
    }
    return {};
  }

  private static buildUrl(
    module: YahooFinanceModules,
    route: YahooFinanceRoute
  ): string {
    return `${YahooFinanceServiceURI}/${module}/${route}`;
  }

  private static buildFieldsParameter(fields: string[]): string {
    return fields.join(",");
  }

  private static buildStockSymbolParameter(stockCode: string | string[]): string {
    if (Array.isArray(stockCode)) {
      stockCode = stockCode.map((code) => {
        return `${code}.SA`;
      });
      return stockCode.join(",");
    }
    return `${stockCode}.SA`;
  }
}
