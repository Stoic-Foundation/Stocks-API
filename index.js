import express from "express";
import cors from "cors";
import routes from "./routes/route.js";

const app = express();

const PORT = process.env.PORT || 8080;

app.set("json spaces", 2);
app.use(cors());

app.use(express.json());
app.use(routes);
app.use((req, res) => {
  res.status(404).json({
    error: "Not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
