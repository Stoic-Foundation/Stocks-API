
// !deprecated  

const express = require("express");
const yahooFinance = require("yahoo-finance2").default;
const app = express();
app.get("/", (req, res) => {
  res.status(200).send({
    status: 200,
    message: "server is up and running",
  });
});

// required parameters: q
app.get("/search", async (req, res) => {
  try {
    var query = req.query.q;

    const results = await yahooFinance.search(query);
    res.status(200).send({
      results: results,
    });
  } catch (error) {
    res.status(404).send(error);
  }
});

// required parameters: name
app.get("/details", async (req, res) => {
  try {
    var name = req.query.name;
    const quote = await yahooFinance.quote(name);
    res.status(200).send(quote);
  } catch (error) {
    res.status(404).send(error);
  }
});

// required parameters: name, period1
app.get("/chart", async (req, res) => {
  try {
    var name = req.query.name;
    var period1 = req.query.period1;
    var period2 = req.query.period2;
    var queryOptions = {};

    if (name.trim().length !== 0 && period1.trim().length !== 0) {
      queryOptions = { period1: period1, period2: period2 };
      const chart = await yahooFinance.chart(name, queryOptions);
      res.status(200).send(chart);
    } else {
      res.status(404).send({Status:404,Error:"Please provide the required parameters"});
    }
    
  } catch (error) {
    res.status(404).send(error);
  }

});

// required parameters: name
app.get("/recommendations", async (req, res) => {
  try {
    var name = req.query.name;
    const recommendations = await yahooFinance.recommendationsBySymbol(name);
    res.status(200).send(recommendations);
  } catch (error) {
    res.status(404).send(error);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
