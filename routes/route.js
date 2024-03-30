import { Router } from "express";
import apiRoutes from "./api/routes.js";

const routes = Router();

routes.use("/api", apiRoutes);

routes.get("/", (req, res) => {
  res.json({
    status: "Ok",
  });
});

export default routes;
