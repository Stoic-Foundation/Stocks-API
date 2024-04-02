import { Router } from "express";
import {
  getChart,
  getDetails,
  getRecommendations,
  searchByQuery,
  getTrending,
} from "./functions.js";

const apiRoutes = Router();

// required parameters: q
apiRoutes.get("/search", searchByQuery);

// required parameters: name
apiRoutes.get("/details", getDetails);

// required parameters: name, period1
apiRoutes.get("/chart", getChart);

// required parameters: name
apiRoutes.get("/recommendations", getRecommendations);

// required parameters: region, count
apiRoutes.get("/trending", getTrending);

export default apiRoutes;
