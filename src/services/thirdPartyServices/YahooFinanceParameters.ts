export const YahooFinanceServiceURI = "https://query2.finance.yahoo.com/v7";

export enum YahooFinanceModules {
  Finance = "finance"
}

export enum YahooFinanceRoute {
  Quote = "quote"
}

export enum YahooFinanceParameters {
  Symbols = "symbols",
  Fields = "fields",
  Language = "lang",
  Formatted= "formatted"
}

enum YahooFinanceQuoteFieldKey {
  language = "language",
  region = "region",
  quoteType = "quoteType",
  triggerable = "triggerable",
  currency = "currency",
  exchange = "exchange",
  shortName = "shortName",
  longName = "longName",
  messageBoardId = "messageBoardId",
  exchangeTimezoneName = "exchangeTimezoneName",
  exchangeTimezoneShortName = "exchangeTimezoneShortName",
  gmtOffSetMilliseconds = "gmtOffSetMilliseconds",
  market = "market",
  esgPopulated = "esgPopulated",
  regularMarketOpen = "regularMarketOpen",
  averageDailyVolume3Month = "averageDailyVolume3Month",
  averageDailyVolume10Day = "averageDailyVolume10Day",
  fiftyTwoWeekLowChange = "fiftyTwoWeekLowChange",
  fiftyTwoWeekLowChangePercent = "fiftyTwoWeekLowChangePercent",
  fiftyTwoWeekRange = "fiftyTwoWeekRange",
  fiftyTwoWeekHighChange = "fiftyTwoWeekHighChange",
  fiftyTwoWeekHighChangePercent = "fiftyTwoWeekHighChangePercent",
  fiftyTwoWeekLow = "fiftyTwoWeekLow",
  fiftyTwoWeekHigh = "fiftyTwoWeekHigh",
  earningsTimestamp = "earningsTimestamp",
  earningsTimestampStart = "earningsTimestampStart",
  earningsTimestampEnd = "earningsTimestampEnd",
  trailingAnnualDividendRate = "trailingAnnualDividendRate",
  trailingPE = "trailingPE",
  trailingAnnualDividendYield = "trailingAnnualDividendYield",
  epsTrailingTwelveMonths = "epsTrailingTwelveMonths",
  epsForward = "epsForward",
  sharesOutstanding = "sharesOutstanding",
  bookValue = "bookValue",
  fiftyDayAverage = "fiftyDayAverage",
  fiftyDayAverageChange = "fiftyDayAverageChange",
  fiftyDayAverageChangePercent = "fiftyDayAverageChangePercent",
  twoHundredDayAverage = "twoHundredDayAverage",
  twoHundredDayAverageChange = "twoHundredDayAverageChange",
  twoHundredDayAverageChangePercent = "twoHundredDayAverageChangePercent",
  marketCap = "marketCap",
  forwardPE = "forwardPE",
  priceToBook = "priceToBook",
  sourceInterval = "sourceInterval",
  exchangeDataDelayedBy = "exchangeDataDelayedBy",
  tradeable = "tradeable",
  regularMarketChange = "regularMarketChange",
  regularMarketChangePercent = "regularMarketChangePercent",
  regularMarketTime = "regularMarketTime",
  regularMarketPrice = "regularMarketPrice",
  regularMarketDayHigh = "regularMarketDayHigh",
  regularMarketDayRange = "regularMarketDayRange",
  regularMarketDayLow = "regularMarketDayLow",
  regularMarketVolume = "regularMarketVolume",
  regularMarketPreviousClose = "regularMarketPreviousClose",
  bid = "bid",
  ask = "ask",
  bidSize = "bidSize",
  askSize = "askSize",
  fullExchangeName = "fullExchangeName",
  financialCurrency = "financialCurrency",
  firstTradeDateMilliseconds = "firstTradeDateMilliseconds",
  priceHint = "priceHint",
  marketState = "marketState",
  symbol = "symbol"
}

export const DesiredYahooFinanceQuoteFields = [
  YahooFinanceQuoteFieldKey.regularMarketPrice,
  YahooFinanceQuoteFieldKey.trailingAnnualDividendYield,
  YahooFinanceQuoteFieldKey.trailingPE,
  YahooFinanceQuoteFieldKey.forwardPE
];
