const swaggerAutogen = require("swagger-autogen")();
const baseFile = require("./swagger.json");

const outputFile = "./swagger_output.json";

const endpointsFiles = [
  "./src/routes/api/indexCounter.js",
];

const contextPath = process.env.CONTEXT_PATH || "";

baseFile.basePath = `${contextPath}/api`;

swaggerAutogen(outputFile, endpointsFiles, baseFile);
