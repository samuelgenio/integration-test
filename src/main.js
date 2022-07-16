import express from "express";
import cors from "cors";
import RoutesDiscovery from "./discovery/routesDiscovery"
import swaggerUi from "swagger-ui-express";

const swaggerFile = require("../swagger_output.json");

const port = process.env.PORT || 3000;
const contextPath = process.env.CONTEXT_PATH || "";

const app = express();

app.use(cors());
app.use(`${contextPath}/api`, RoutesDiscovery.loadRoute());
app.use(`${contextPath}`, RoutesDiscovery.loadRoute('app'));
app.use(
    `${contextPath}/swagger`,
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile)
  );
  app.get(`${contextPath}`, (req, res) => {
    res.redirect(`${contextPath}/swagger`);
  });

if (require.main === module) {
    app.listen(port, () => { console.log("server started!") });
}

module.exports = app;
