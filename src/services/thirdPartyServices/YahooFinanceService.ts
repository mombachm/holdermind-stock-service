import Axios from "axios";

const YahooFinanceServiceURI = "https://query2.finance.yahoo.com/v7";

enum YahooFinanceModules {
  Finance = "/finance"
}

enum YahooFinanceRoute {
  Quote = "/quote"
}

// https://query2.finance.yahoo.com/v7/finance/quote?symbols=SAPR4.SA
// https://query2.finance.yahoo.com/v7/finance/quote?formatted=true&crumb=Okt310BSzzk&lang=en-US&region=US&symbols=SAPR4.SA&fields=&corsDomain=finance.yahoo.com

export class YahooFinanceService {

  public static async getStockinfo(): Promise<any> {
    const response = await Axios.get(YahooFinanceServiceURI + YahooFinanceModules.Finance + YahooFinanceRoute.Quote, {
      params: {
        symbols: "SAPR4.SA"
      }
    });
    if (response.data.quoteResponse.result) {
      return response.data.quoteResponse.result[0];
    }
    return {};
  }
}
