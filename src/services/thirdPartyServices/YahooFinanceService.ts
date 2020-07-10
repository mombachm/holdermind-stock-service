import Axios from "axios";
import {
  DesiredYahooFinanceQuoteFields,
  YahooFinanceParameters,
  YahooFinanceRoute,
  YahooFinanceServiceV7URI,
  YahooFinanceMainModule,
  YahooFinanceSubmoduleParameter,
  YahooFinanceServiceV10URI,
} from "./YahooFinanceParameters";

export class YahooFinanceService {
  public static async getStocksInfo(stocksCode: string | string[]): Promise<any> {
    const response = await Axios.get(
      this.buildV7Url(YahooFinanceMainModule.Finance, YahooFinanceRoute.Quote),
      {
        params: {
          [YahooFinanceParameters.Modules]: YahooFinanceSubmoduleParameter.SummaryDetail,
          [YahooFinanceParameters.Symbols]: this.buildStockSymbolParameter(stocksCode),
          [YahooFinanceParameters.Fields]: this.joinParameters(
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

  public static async getStockInfoV10(stockCode: string, modules: YahooFinanceSubmoduleParameter[]): Promise<any> {
    console.log(this.buildV10Url(YahooFinanceMainModule.Finance, YahooFinanceRoute.QuoteSummary, stockCode));
    const response = await Axios.get(
      this.buildV10Url(YahooFinanceMainModule.Finance, YahooFinanceRoute.QuoteSummary, stockCode),
      {
        params: {
          [YahooFinanceParameters.Modules]: this.joinParameters(modules),
          // [YahooFinanceParameters.Fields]: this.buildFieldsParameter(
          //   DesiredYahooFinanceQuoteFields
          // ),
          [YahooFinanceParameters.Language]: "pt-BR",
          [YahooFinanceParameters.Formatted]: false
        }
      }
    );
    console.log(response);
    if (response.data.quoteSummary.result) {
      return response.data.quoteSummary.result;
    }
    return {};
  }

  private static buildV7Url(
    module: YahooFinanceMainModule,
    route: YahooFinanceRoute
  ): string {
    return `${YahooFinanceServiceV7URI}/${module}/${route}`;
  }

  private static buildV10Url(
    module: YahooFinanceMainModule,
    route: YahooFinanceRoute,
    stockCode: string
  ): string {
    return `${YahooFinanceServiceV10URI}/${module}/${route}/${this.buildStockSymbolParameter(stockCode)}`;
  }

  private static joinParameters(params: string[]): string {
    return params.join(",");
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
