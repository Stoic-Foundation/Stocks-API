const express = require("express");
const yahooFinance = require("yahoo-finance2").default;
const serverless = require("serverless-http");
const router = express.Router()
const app = express();
app.get('/', (req, res) => {
     
    res.status(200).send({
        status:200,
        message:"server is up and running"
      })
  
  });


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

app.get("/details",async(req,res)=>{
    try{
        var name = req.query.name;
        const quote  = await yahooFinance.quote(name);
        res.status(200).send(quote);
    }catch (error) {
        res.status(404).send(error);
      }
})



// app.get("/api/course/:id", (req, res) => {
//   res.send(req.params.id); //req.params.id to get :id value
//   // res.send(req.query) //req.query to get ?sortBy=name values
// });
app.use('/functions/index',router);
module.exports.handler = serverless(app);
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () =>
//   console.log(`Server is running on http://localhost:${PORT}`)
// );
