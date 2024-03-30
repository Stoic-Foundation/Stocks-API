import yahooFinance from "yahoo-finance2";

export const searchByQuery = async (req, res) => {
  try {
    var query = req.query.q;

    const results = await yahooFinance.search(query);
    res.status(200).json({
      results: results,
    });
  } catch (error) {
    res.status(404).json({ error });
  }
};
export const getDetails = async (req, res) => {
  try {
    var name = req.query.name;
    const quote = await yahooFinance.quote(name);
    res.status(200).send(quote);
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const getChart = async (req, res) => {
  try {
    var name = req.query.name;
    var period1 = req.query.period1;
    var period2 = req.query.period2;
    var queryOptions = {};

    if (name.trim().length !== 0 && period1.trim().length !== 0) {
      queryOptions = { period1: period1, period2: period2 };
      const chart = await yahooFinance.chart(name, queryOptions);
      res.status(200).json(chart);
    } else {
      res
        .status(404)
        .json({ Status: 404, Error: "Please provide the required parameters" });
    }
  } catch (error) {
    res.status(404).json({ error });
  }
};
export const getRecommendations = async (req, res) => {
  try {
    var name = req.query.name;
    const recommendations = await yahooFinance.recommendationsBySymbol(name);
    res.status(200).send(recommendations);
  } catch (error) {
    res.status(404).json({ error });
  }
};
