import yahooFinance from "yahoo-finance2";

export const searchByQuery = async (req, res) => {
  try {
    var query = req.query.q;

    const results = await yahooFinance.search(query);
    res.status(200).json({
      results: results,
    });
  } catch (error) {
    res.status(404).json({ Error: "Something went wrong. Check Parameters" });
  }
};
export const getDetails = async (req, res) => {
  try {
    var name = req.query.name;
    const quote = await yahooFinance.quote(name);
    res.status(200).send(quote);
  } catch (error) {
    res.status(404).json({ Error: "Something went wrong. Check Parameters" });
  }
};

export const getChart = async (req, res) => {
  try {
    var name = req.query.name;
    var period1 = req.query.period1;
    var period2 = req.query.period2;
    var queryOptions = {};

    if ( (name === undefined || name.trim().length !== 0) && (period1 === undefined || period1.trim().length !== 0)) {
      queryOptions = { period1: period1, period2: period2 };
      const chart = await yahooFinance.chart(name, queryOptions);
      res.status(200).json(chart);
    } else {
      res
        .status(404)
        .json({ Status: 404, Error: "Please provide the required parameters" });
    }
  } catch (error) {
    res.status(404).json({ Error: "Something went wrong. Check Parameters" });
  }
};
export const getRecommendations = async (req, res) => {
  try {
    var name = req.query.name;
    const recommendations = await yahooFinance.recommendationsBySymbol(name);
    res.status(200).send(recommendations);
  } catch (error) {
    res.status(404).json({ Error: "Something went wrong. Check Parameters" });
  }
};

export const getTrending = async (req, res) => {
  try {
    var region = req.query.region; // region or country
    var count = req.query.count; // region or country
    if (count === undefined || count.trim().length === 0){
      count = 5;
    } 
   
    if (region.trim().length === 0) {
      res
        .status(404)
        .json({ Status: 404, Error: "Please provide the required parameters" });
    } 
    else {
        const queryOptions = { count: count, lang: "en-US" };
        const trending = await yahooFinance.trendingSymbols(
          region,
          queryOptions
        );
        res.status(200).send(trending);
    }
  } catch (error) {
    res.status(404).json({ Error: "Something went wrong. Check Parameters" });
  }
};
