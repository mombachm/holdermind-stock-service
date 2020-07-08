import Axios from "axios";
import {
  DesiredYahooFinanceQuoteFields,
  YahooFinanceParameters,
  YahooFinanceModules,
  YahooFinanceRoute,
  YahooFinanceServiceURI,
} from "./YahooFinanceParameters";

export class YahooFinanceService {
  public static async getStockinfo(stockCode: string): Promise<any> {
    const response = await Axios.get(
      this.buildUrl(YahooFinanceModules.Finance, YahooFinanceRoute.Quote),
      {
        params: {
          [YahooFinanceParameters.Symbols]: this.buildStockSymbol(stockCode),
          [YahooFinanceParameters.Fields]: this.buildFieldsParameter(
            DesiredYahooFinanceQuoteFields
          ),
          [YahooFinanceParameters.Language]: "pt-BR",
          [YahooFinanceParameters.Formatted]: true,
        },
      }
    );
    if (response.data.quoteResponse.result) {
      return response.data.quoteResponse.result[0];
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

  private static buildStockSymbol(stockCode: string): string {
    return `${stockCode}.SA`;
  }
}
